import { BaseAPI } from './base.api';
import { HTTP } from './api';

const profileAPIInstance = new HTTP('/user/profile');

export type LevelCareerProps = {
    id: number;
    label: number;
};

export type ProfileProps = {
    birthdate?: number;
    career_level?: number;
    id: string;
    login?: string;
    mobile_phone: string;
    name?: string;
    patronymic?: string;
    sex?: number;
    surname?: string;
};

export type ResponceProps<T> = {
    code: number;
    msg: string;
    obj?: T;
};

export type CodeProps = {
    code: number;
    password: string;
};

export class ProfileAPI extends BaseAPI {
    static getProfile(): Promise<ResponceProps<ProfileProps>> {
        return profileAPIInstance.get('/', {});
    }

    static editProfile(data: any): Promise<ResponceProps<ProfileProps>> {
        return profileAPIInstance.patch('/', { data });
    }

    static getCodePassword(): Promise<ResponceProps<string>> {
        return profileAPIInstance.get('/reset_password/', {});
    }

    static postCodePassword(data: CodeProps): Promise<ResponceProps<string>> {
        return profileAPIInstance.post('/reset_password/', { data });
    }
}
