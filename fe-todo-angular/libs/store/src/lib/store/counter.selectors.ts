

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { counterReducer } from './counter.reducer';

export const selectCounterState = createFeatureSelector<any>('counterReducer');

export const selectConfig = createSelector(
    selectCounterState,
    (state: any) => state
);

