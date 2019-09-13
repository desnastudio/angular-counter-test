import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import {IStore} from '../store';
import {Change} from '../store/actions/numbers.action';
import {NumbersService} from '../shared/services/numbers.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent {

  constructor(private store: Store<IStore>, private numbersService: NumbersService,
  ) { }

  public start(): void {
    this.store.dispatch(new Change());
  }
  public stop(): void {
    this.numbersService.stop();
  }

}
