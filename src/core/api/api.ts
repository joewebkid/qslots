/* eslint-disable consistent-return */
import { store } from '@core/store';
import { MESSAGES, METHOD, API_BASE_PATH } from './api.consts';

type HeadersType = {
    [key: string]: string;
};

type OptionsType = {
    method: METHOD;
    data?: any;
    headers?: HeadersType;
    responseFormat?: 'json' | 'text';
};

type OptionsWithoutMethodType = Omit<OptionsType, 'method'>;

export interface ResponseProps<T> extends Omit<XMLHttpRequest, 'response'> {
    response: T;
}

export function queryStringify<T extends object>(data: T): string {
    if (!data) return '';

    const queryArr = Object.entries(data).map(
        ([key, value]) => `${key}=${value}`,
    );

    return `?${queryArr.join('&')}`;
}

export class HTTP {
    _path: string = API_BASE_PATH;

    constructor(path = '') {
        this._path += path;
    }

    get<T>(url: string, options: OptionsWithoutMethodType = {}): Promise<T> {
        return this.request<T>(url, { ...options, method: METHOD.GET });
    }

    post<T>(url: string, options: OptionsWithoutMethodType = {}): Promise<T> {
        return this.request<T>(url, { ...options, method: METHOD.POST });
    }

    put<T>(url: string, options: OptionsWithoutMethodType = {}): Promise<T> {
        return this.request<T>(url, { ...options, method: METHOD.PUT });
    }

    patch<T>(url: string, options: OptionsWithoutMethodType = {}): Promise<T> {
        return this.request<T>(url, { ...options, method: METHOD.PATCH });
    }

    delete<T>(
        url: string,
        options: OptionsWithoutMethodType = {},
    ): Promise<T> {
        return this.request<T>(url, { ...options, method: METHOD.DELETE });
    }

    request<T>(
        url: string,
        options: OptionsType = { method: METHOD.GET },
    ): Promise<T> {
        function serializeBody(method: METHOD, data: T): string | undefined | FormData {
            if (method === METHOD.GET) {
                return;
            }
            if (data instanceof FormData) {
                return data;
            }
            return JSON.stringify(data);
        }

        function serializeHeader(method: METHOD, data: T) {
            const strAuthorization = `${store.getState().auth.userToken}`;

            const header = { authorization: strAuthorization };
            if (method === METHOD.GET) {
                return header;
            }
            if (data instanceof FormData) {
                return header;
            }
            return { ...header, 'Content-Type': 'application/json' };
        }

        const { method, data, responseFormat = 'json' } = options;

        const defaultReject = (response: Response) => {
            if (response.status >= 500) {
                alert(MESSAGES.FAIL_MESSAGE_500_DEFAULT);
            } else {
                alert(MESSAGES.FAIL_MESSAGE_DEFAULT);
            }
        };

        const basePath = `${this._path}${url}`;
        const path = method === METHOD.GET
            ? `${basePath}${queryStringify(data)}`
            : basePath;

        return fetch(path, {
            method,
            body: serializeBody(method, data),
            headers: serializeHeader(method, data),
        })
            .then((response) => {
                if (response.status > 300) {
                    return Promise.reject(response);
                }

                return response[responseFormat]();
            })
            .then((resData) => resData)
            .catch(defaultReject);
    }
}
