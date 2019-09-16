import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show-value',
  templateUrl: './value-box.component.html',
  styleUrls: ['./value-box.component.scss']
})
export class ValueBoxComponent {
  @Input()
  public value = 0;
}
