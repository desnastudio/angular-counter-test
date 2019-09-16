import { ModuleWithProviders, NgModule } from '@angular/core';
import {
  MatButtonModule,
} from '@angular/material';
import { CommonModule } from '@angular/common';
import {CalculationService} from './services/calculation.service';

@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    MatButtonModule
  ],
  providers: [CalculationService]
})
export class SharedModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
    };
  }
}
