import { ActionProps, PROFILE } from '../actions/action.types';
import { StorePasswordProps } from '../store.types';

const initialState = {} as StorePasswordProps;

export const passwordReducer = (state = initialState, action: ActionProps) => {
    switch (action.type) {
    case PROFILE.SET_PASSWORD:
        return { ...state, ...action.payload };
    default:
        return state;
    }
};
