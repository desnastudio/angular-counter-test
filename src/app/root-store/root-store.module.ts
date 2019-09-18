import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterStoreModule } from './counter-store/counter.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CounterStoreModule
  ]
})
export class RootStoreModule { }
