import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {
public isStopped: Subject<void> = new Subject();
  public stop(): void {
    this.isStopped.next();
  }
}
