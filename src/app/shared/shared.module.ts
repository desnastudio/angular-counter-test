import { ModuleWithProviders, NgModule } from '@angular/core';
import {
  MatButtonModule,
} from '@angular/material';
import { CommonModule } from '@angular/common';
import {NumbersService} from './services/numbers.service';

@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    MatButtonModule
  ],
  providers: [NumbersService]
})
export class SharedModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
    };
  }
}
