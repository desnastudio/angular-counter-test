import { Injectable } from '@angular/core';
import {map, switchMap, takeUntil} from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {Decrease, Increase, NumbersActions} from '../actions/numbers.action';
import {interval} from 'rxjs';
import {NumbersService} from '../../shared/services/numbers.service';

@Injectable()
export class NumbersEffects {
  private _checkSecod(num: number): boolean {
    return Boolean(num % 2);
  }
  @Effect()
  public loadMovies$: any = this.actions$.pipe(
    ofType(NumbersActions.CHANGE),
    switchMap(() =>
      interval(1000 )
        .pipe(
          takeUntil(this.numbersService.isStopped),
          map((i: number) => this._checkSecod(i)),
          map((flag: boolean) => flag ? new Increase() : new Decrease())
        )
      // this.productsService.getProducts().pipe(
      //   map((products: IProduct[]) => new GetProductsSuccess(products)),
      //   catchError((err: any) => of(new GetProductsError(err)))
      // )
    )
  );

  public constructor(private actions$: Actions, private numbersService: NumbersService) {}
}
