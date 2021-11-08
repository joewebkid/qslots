import { ResponceStatisticsProps } from '@core/api';
import { ActionProps, STATISTICS } from '../actions/action.types';
import { FilterStatisticsProps, StoreStatisticsProps } from '../store.types';

const initialState: StoreStatisticsProps = {
    data: {} as ResponceStatisticsProps[],
    result: {} as ResponceStatisticsProps[],
    filter: {} as FilterStatisticsProps,
};

export const statisticsReducer = (state = initialState, action: ActionProps) => {
    switch (action.type) {
    case STATISTICS.GET_STATISTICS:
        return { ...state, data: action.payload };
    case STATISTICS.SET_FILTER:
        return { ...state, filter: action.payload };
    case STATISTICS.SET_RESULT:
        return { ...state, result: action.payload };
    default:
        return state;
    }
};
