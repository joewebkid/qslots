import { LevelCareerProps } from '@core/api';
import { ClassifierAPI, SexProps } from '@core/api/classifier.api';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { StoreProps } from '../store.types';
import { CLASSIFIER } from './action.types';

export const setClassifierSex = (payload: SexProps[]) => ({
    type: CLASSIFIER.SET_SEX,
    payload,
});

export const getClassifierSexThunk = (): ThunkAction<
void,
StoreProps,
unknown,
Action<string>
> => async (dispatch) => {
    const data = await ClassifierAPI.getSexs();
    dispatch(setClassifierSex(data));
};

export const setClassifierLevelCareers = (payload: LevelCareerProps[]) => ({
    type: CLASSIFIER.SET_LEVEL_CAREER,
    payload,
});

export const getClassifierLevelCareersThunk = (): ThunkAction<
void,
StoreProps,
unknown,
Action<string>
> => async (dispatch) => {
    const data = await ClassifierAPI.getLevelCareers();
    dispatch(setClassifierLevelCareers(data));
};
