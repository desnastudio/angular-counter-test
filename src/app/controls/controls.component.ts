import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import {IStore} from '../store';
import {Change, Reset} from '../store/actions/numbers.action';
import {CalculationService} from '../shared/services/calculation.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent {

  constructor(private store: Store<IStore>, private numbersService: CalculationService,
  ) { }

  public start(): void {
    this.store.dispatch(new Change());
  }
  public stop(): void {
    this.numbersService.stop();
  }
  public reset(): void {
    this.store.dispatch(new Reset());
  }

}
