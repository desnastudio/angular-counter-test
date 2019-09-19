import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {ActionTypes, ChangeAction, DecreaseAction, IncreaseAction} from './counter.actions';
import {switchMap} from 'rxjs/operators';

@Injectable()
export class CounterEffects {
  @Effect()
  loadRequestEffect$: Observable<any> = this.actions$.pipe(
    ofType<ChangeAction>(ActionTypes.CHANGE),
    switchMap(_ => [
      new IncreaseAction(),
      new DecreaseAction(),
      new DecreaseAction()
    ])
  );

  constructor(private actions$: Actions) {
  }
}
