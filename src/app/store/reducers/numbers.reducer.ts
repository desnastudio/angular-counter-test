import {NumbersActions, NumbersActionsTypes} from '../actions/numbers.action';

export function firstNumberReducer(state: number = -5, action: NumbersActionsTypes): number {
  switch (action.type) {
    case NumbersActions.INCREASE: {
      return state + 1;
    }
    default: return state;
  }
}

export function secondNumberReducer(state: number = 10, action: NumbersActionsTypes): number {
  switch (action.type) {
    case NumbersActions.DECREASE: {
      return state - 1;
    }
    default: return state;
  }
}
