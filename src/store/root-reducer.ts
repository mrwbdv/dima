import { modalReducer } from '@features/modal/model';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    modal: modalReducer
});

type rootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<rootReducerType>;
