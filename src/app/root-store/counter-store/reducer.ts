import {Actions, ActionTypes} from './actions';
import {initialState, State} from './state';

export function counterReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.CHANGE:
      return {
        ...state
      };
    case ActionTypes.INCREASE:
      return {
        ...state,
        counterFirst: this.counterFirst + 1
      };
    case ActionTypes.DECREASE:
      return {
        ...state,
        counterSecond: this.counterSecond - 1
      };
    default: {
      return state;
    }
  }
}
