import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {counterReducer} from './counter.reducer';
import {EffectsModule} from '@ngrx/effects';
import {CounterEffects} from './counter.effects';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('counter', counterReducer),
    EffectsModule.forFeature([CounterEffects])
  ],
  providers: [CounterEffects]
})
export class CounterStoreModule { }
