import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RootStoreModule} from './root-store/root.module';
import {CounterComponent} from './containers/counter/counter.component';
import {CounterNumbersComponent} from './components/counter-numbers/counter-numbers.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterNumbersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RootStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
