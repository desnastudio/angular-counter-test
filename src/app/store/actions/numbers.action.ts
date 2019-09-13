import { Action } from '@ngrx/store';

export enum NumbersActions {
  CHANGE = 'CHANGE',
  INCREASE = 'INCREASE',
  DECREASE = 'DECREASE',
  RESET = 'RESET'
}

export class Change implements Action {
  public readonly type: string = NumbersActions.CHANGE;
}

export class Increase implements Action {
  public readonly type: string = NumbersActions.INCREASE;
}

export class Decrease implements Action {
  public readonly type: string = NumbersActions.DECREASE;
}

export class Reset implements Action {
  public readonly type: string = NumbersActions.RESET;
}

export type NumbersActionsTypes = Change | Increase | Decrease | Reset;
