import { homeReducer } from '@pages/home/model';
import { modalReducer } from '@features/modal/model';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    home: homeReducer,
    modal: modalReducer
});

type rootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<rootReducerType>;
