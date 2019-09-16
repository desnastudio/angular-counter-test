import {ActionReducer, ActionReducerMap, MetaReducer} from '@ngrx/store';
import {firstInitialState, firstNumberReducer, secondInitialState, secondNumberReducer} from './reducers/numbers.reducer';
import {NumbersActions, NumbersActionsTypes} from './actions/numbers.action';

export interface IStore {
  firstNumber: number;
  secondNumber: number;
}

export const reducers: ActionReducerMap<IStore> = {
  firstNumber: firstNumberReducer,
  secondNumber: secondNumberReducer
};

export function resetReducer(reducer: ActionReducer<IStore>): ActionReducer<IStore> {
  return (state: IStore | undefined, action: NumbersActionsTypes): IStore => {
    if (action.type === NumbersActions.RESET) {
      state = { firstNumber: firstInitialState, secondNumber: secondInitialState };
    }
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<IStore>[] = [resetReducer];
