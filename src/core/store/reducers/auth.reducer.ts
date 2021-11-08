import { ActionProps, AUTH } from '../actions/action.types';
import { StoreAuthProps } from '../store.types';

const initialState = {} as StoreAuthProps;

export const authReducer = (
    state = initialState,
    action: ActionProps,
) => {
    switch (action.type) {
    case AUTH.SET_TOKEN:
        return { ...state, userToken: action.payload };
    case AUTH.CLEAR_TOKEN:
        return initialState;
    default:
        return state;
    }
};
