import {State} from './counter.state';
import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';


const getCounterFirst = (state: State) => state.counterFirst;

const getCounterSecond = (state: State) => state.counterSecond;

export const selectCounterState: MemoizedSelector<object, State> =
  createFeatureSelector<State>('counter');

export const selectCounterFirst: MemoizedSelector<object, number> = createSelector(
  selectCounterState,
  getCounterFirst
);

export const selectCounterSecond: MemoizedSelector<object, number> = createSelector(
  selectCounterState,
  getCounterSecond
);
