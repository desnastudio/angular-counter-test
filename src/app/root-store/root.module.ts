import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CounterStoreModule} from './counter-store';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CounterStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ]
})
export class RootStoreModule {
}
