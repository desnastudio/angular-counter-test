import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show-value',
  templateUrl: './show-value.component.html',
  styleUrls: ['./show-value.component.scss']
})
export class ShowValueComponent {
  @Input()
  public value = 0;
}
