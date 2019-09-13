import { Injectable } from '@angular/core';
import {map, mergeMap, switchMap, takeUntil} from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {Decrease, Increase, NumbersActions} from '../actions/numbers.action';
import {interval} from 'rxjs';
import {NumbersService} from '../../shared/services/numbers.service';

@Injectable()
export class NumbersEffects {

  @Effect()
  public loadMovies$: any = this.actions$.pipe(
    ofType(NumbersActions.CHANGE),
    switchMap(() =>
      interval(1000 )
        .pipe(
          takeUntil(this.numbersService.isStopped),
          mergeMap(() => [new Increase(), new Decrease(), new Decrease()])
        )
    )
  );

  public constructor(private actions$: Actions, private numbersService: NumbersService) {}
}
