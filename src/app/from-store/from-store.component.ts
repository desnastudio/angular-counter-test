import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {IStore} from '../store';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-from-store',
  templateUrl: './from-store.component.html',
  styleUrls: ['./from-store.component.scss']
})
export class FromStoreComponent implements OnInit {
  public firstNumber$!: Observable<number>;
  public secondNumber$!: Observable<number>;


  constructor(private store: Store<IStore>
  ) { }

  ngOnInit() {
    this.firstNumber$ = this.store.select('firstNumber');
    this.secondNumber$ = this.store.select('secondNumber');
  }

}
