import { ModuleWithProviders, NgModule } from '@angular/core';
import {
  MatButtonModule,
} from '@angular/material';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    MatButtonModule
  ],
})
export class SharedModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
    };
  }
}
