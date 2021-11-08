import { ProfileAPI, ProfileProps } from '@core/api/profile.api';
import moment from 'moment';
// import moment from 'moment';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { StoreProps } from '../store.types';
import { PROFILE } from './action.types';
import {
    getClassifierLevelCareersThunk,
    getClassifierSexThunk,
} from './classifier.actions';
import { showSnackBarAction } from './snackbar.actions';

import {FormConfigNames} from '../../../pages/Profile/components/ProfileForm/ProfileForm.config';

export const setProfile = (payload: ProfileProps) => ({
    type: PROFILE.SET_PROFILE,
    payload,
});

export const getProfileThunk = (): ThunkAction<void,
    StoreProps,
    unknown,
    Action<string>> => async (dispatch) => {
    const data = await ProfileAPI.getProfile();
    if (data.obj) {
        dispatch(setProfile(data.obj));
        dispatch(getClassifierLevelCareersThunk());
        dispatch(getClassifierSexThunk());
    }
};

export const setEditProfileThunk = (
    data: any,
): ThunkAction<void, StoreProps, unknown, Action<string>> => async (
    dispatch,
) => {
    if (data[FormConfigNames.BIRTHDATE]) {
        const birthValue = data[FormConfigNames.BIRTHDATE].value;

        if (moment().subtract(18, 'year') < moment(birthValue)) {
            dispatch(
                showSnackBarAction({
                    type: 'warning',
                    msg: 'Вам должно быть больше 18 лет',
                }),
            );
            return;
        }
    }

    const req: any = {};
    Object.values(FormConfigNames).forEach((name) => {
        if (name === FormConfigNames.SEX && !data[name]?.value) {
            return;
        }

        switch (name) {
            case FormConfigNames.BIRTHDATE:
                const date = new Date(data[name]?.value).valueOf() / 1000;
                req[name] = date || null;
                break;
            case FormConfigNames.CAREER_LEVEL:
                req[name] = (data[name]?.value === '-1') ? null : data[name]?.value;
                break;
            default:
                req[name] = data[name]?.value;
        }
    });

    try {
        const result = await ProfileAPI.editProfile(req);
        if (result.code === 200 && result.obj) {
            dispatch(setProfile(result.obj));
            dispatch(
                showSnackBarAction({
                    type: 'success',
                    msg: 'Данные сохранены',
                }),
            );
        }
    } catch {
        dispatch(
            showSnackBarAction({
                type: 'warning',
                msg: 'Ошибка сервера',
            }),
        );
    }
};
