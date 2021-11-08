import { ProfileProps } from '@core/api';
import { ActionProps, PROFILE } from '../actions/action.types';

const initialState = {} as ProfileProps;

export const profileReducer = (state = initialState, action: ActionProps) => {
    switch (action.type) {
    case PROFILE.SET_PROFILE:
        return { ...state, ...action.payload };
    default:
        return state;
    }
};
