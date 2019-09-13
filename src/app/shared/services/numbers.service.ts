import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumbersService {
public isStopped: Subject<void> = new Subject();
  public stop(): void {
    this.isStopped.next();
  }
}
