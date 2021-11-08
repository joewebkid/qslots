import { AUTH } from './action.types';

export const setTokenAction = (payload: string) => ({
    type: AUTH.SET_TOKEN,
    payload,
});

export const clearTokenAction = () => ({
    type: AUTH.CLEAR_TOKEN,
});
