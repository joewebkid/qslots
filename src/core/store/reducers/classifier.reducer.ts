import { ActionProps, CLASSIFIER } from '../actions/action.types';
import { StoreClassifiersProps } from '../store.types';

const initialState = {} as StoreClassifiersProps;

export const classifierReducer = (state = initialState, action: ActionProps) => {
    switch (action.type) {
    case CLASSIFIER.SET_SEX:
        return { ...state, sex: action.payload };
    case CLASSIFIER.SET_LEVEL_CAREER:
        return { ...state, career_level: action.payload };
    default:
        return state;
    }
};
