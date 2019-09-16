import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import {metaReducers, reducers} from './store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment.prod';
import { ControlsComponent } from './controls/controls.component';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ControlsWrapperComponent } from './controls-wrapper/controls-wrapper.component';
import {ValueBoxComponent} from './controls-wrapper/value-box/value-box.component';
import {EffectsModule} from '@ngrx/effects';
import {effects} from './store/effects';

@NgModule({
  declarations: [
    AppComponent,
    ControlsComponent,
    ControlsWrapperComponent,
    ValueBoxComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot(effects)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
