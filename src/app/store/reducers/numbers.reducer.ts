import {NumbersActions, NumbersActionsTypes} from '../actions/numbers.action';

export const firstInitialState = -5;
export function firstNumberReducer(state: number = firstInitialState, action: NumbersActionsTypes): number {
  switch (action.type) {
    case NumbersActions.INCREASE: {
      return state + 1;
    }
    default: return state;
  }
}

export const secondInitialState = 10;
export function secondNumberReducer(state: number = secondInitialState, action: NumbersActionsTypes): number {
  switch (action.type) {
    case NumbersActions.DECREASE: {
      return state - 1;
    }
    default: return state;
  }
}
