import { ProfileAPI } from '@core/api';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { store } from '../store';
import { StorePasswordProps, StoreProps } from '../store.types';
import { PROFILE } from './action.types';
import { showSnackBarAction } from './snackbar.actions';

export const setPasswordAction = (payload: StorePasswordProps) => ({
    type: PROFILE.SET_PASSWORD,
    payload,
});

export const setEditPasswordThunk = (
    data: any,
): ThunkAction<void, StoreProps, unknown, Action<string>> => async (
    dispatch,
) => {
    const temp = store.getState().password;
    const { name, value } = data;
    if (name) {
        temp[name] = value;
        dispatch(setPasswordAction(temp));
    }
};

export const getCodePasswordThunk = async () => {
    ProfileAPI.getCodePassword();
};

export const editPasswordThunk = (
): ThunkAction<void, StoreProps, unknown, Action<string>> => async (
    dispatch,
) => {
    const data = { ...store.getState().password };
    delete data.passwordRetry;
    data.code = Number(data.code);
    const result = await ProfileAPI.postCodePassword(data);
    if (result.code === 200) {
        dispatch(showSnackBarAction({ type: 'success', msg: result.msg }));
    } else {
        dispatch(showSnackBarAction({ type: 'warning', msg: result.msg }));
    }
    dispatch(setEditPasswordThunk({ name: 'code', value: '' }));
    dispatch(setEditPasswordThunk({ name: 'passwordRetry', value: '' }));
};
