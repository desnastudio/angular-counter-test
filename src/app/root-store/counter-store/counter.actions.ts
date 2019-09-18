import {Action} from '@ngrx/store';

export enum ActionTypes {
  CHANGE = '[Counter] Change',
  INCREASE = '[Counter] Increase',
  DECREASE = '[Counter] Decrease'
}

export class ChangeAction implements Action {
  readonly type = ActionTypes.CHANGE;
}

export class IncreaseAction implements Action {
  readonly type = ActionTypes.INCREASE;
}

export class DecreaseAction implements Action {
  readonly type = ActionTypes.DECREASE;
}

export type Actions = ChangeAction | IncreaseAction | DecreaseAction;
