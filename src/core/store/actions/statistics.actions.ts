import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { KeyCourse, ResponceStatisticsProps, StatisticsAPI } from '../../api';
import { FilterStatisticsProps, StoreProps } from '../store.types';
import { STATISTICS } from './action.types';
import { store } from '../store';

const getStatistics = (payload: ResponceStatisticsProps[]) => ({
    type: STATISTICS.GET_STATISTICS,
    payload,
});

const setFilter = (payload: FilterStatisticsProps) => ({
    type: STATISTICS.SET_FILTER,
    payload,
});

const setResult = (payload: ResponceStatisticsProps[]) => ({
    type: STATISTICS.SET_RESULT,
    payload,
});

const ALL_OBJ = { id: 'all', label: 'Все' };

export const getStatisticsThunk = (): ThunkAction<
void,
StoreProps,
unknown,
Action<string>
> => async (dispatch) => {
    const result = await StatisticsAPI.getStatistics();
    const tempFilter = {
        system_data: [ALL_OBJ],
        sub_system_data: [ALL_OBJ],
        test_data: [ALL_OBJ],
    } as FilterStatisticsProps;

    const serializeResult = (result && Array.isArray(result)) ? result.map((obj) => {
        const elem = { ...obj };
        elem.create_dt *= 1000;
        elem.id = uuidv4();
        elem.value = obj.result.value / 100;
        if (!tempFilter.sub_system_data.find((_) => (_.label === obj.sub_system))) {
            tempFilter.sub_system_data.push({ label: obj.sub_system, id: uuidv4() });
        }
        if (!tempFilter.system_data.find((_) => (_.label === obj.system))) {
            tempFilter.system_data.push({ label: obj.system, id: uuidv4() });
        }
        if (!tempFilter.test_data.find((_) => (_.label === obj.test))) {
            tempFilter.test_data.push({ label: obj.test, id: uuidv4() });
        }

        return elem;
    }) : [];
    dispatch(setFilter(tempFilter));
    dispatch(setResult(serializeResult));
    dispatch(getStatistics(serializeResult));
};

export const setFilterThunk = (payload: FilterStatisticsProps): ThunkAction<
void,
StoreProps,
unknown,
Action<string>
> => async (dispatch) => {
    dispatch(setFilter(payload));
    const obj: { [key in KeyCourse]?: string } = {};
    const keys: KeyCourse[] = ['system', 'sub_system', 'test'];
    obj.system = payload.system_data.find((_) => (_.id === payload.system))?.label;
    obj.sub_system = payload.sub_system_data.find((_) => (_.id === payload.sub_system))?.label;
    obj.test = payload.test_data.find((_) => (_.id === payload.test))?.label;
    const { data } = store.getState().statistics;
    if (data) {
        const result = data.filter((course: ResponceStatisticsProps) => {
            let isGood = true;

            keys.forEach((key) => {
                // eslint-disable-next-line eqeqeq
                if (obj[key] && (course[key] !== obj[key] && obj[key] !== ALL_OBJ.label)) {
                    isGood = false;
                }
            });
            if (payload?.create_dt) {
                const date = moment(new Date(course.create_dt)).startOf('day').format('X');
                if (!Number.isNaN(date)) {
                    if (Number(date) !== payload.create_dt) {
                        isGood = false;
                    }
                }
            }
            return isGood;
        });
        dispatch(setResult(result));
    }
};
