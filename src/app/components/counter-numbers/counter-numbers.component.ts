import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-counter-numbers',
  templateUrl: './counter-numbers.component.html',
  styleUrls: ['./counter-numbers.component.scss']
})
export class CounterNumbersComponent implements OnInit {
  @Input() counterFirst: number;
  @Input() counterSecond: number;

  constructor() {
  }

  ngOnInit() {
  }

}
