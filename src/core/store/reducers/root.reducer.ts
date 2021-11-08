import { combineReducers } from 'redux';
import { authReducer } from './auth.reducer';
import { profileReducer } from './profile.reducer';
import { classifierReducer } from './classifier.reducer';
import { statisticsReducer } from './statistics.reducer';
import { passwordReducer } from './password.reducer';
import { snackbarReducers } from './snackbar.reducers';

export const rootReducer = combineReducers({
    statistics: statisticsReducer,
    auth: authReducer,
    profile: profileReducer,
    classifiers: classifierReducer,
    password: passwordReducer,
    snackbar: snackbarReducers,
});
