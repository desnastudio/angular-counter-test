import {ActionReducerMap} from '@ngrx/store';
import {firstNumberReducer, secondNumberReducer} from './reducers/numbers.reducer';

export interface IStore {
  firstNumber: number;
  secondNumber: number;
}

export const reducers: ActionReducerMap<IStore, any> = {
  firstNumber: firstNumberReducer,
  secondNumber: secondNumberReducer
};
