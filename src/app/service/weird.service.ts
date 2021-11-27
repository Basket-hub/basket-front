import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeirdService {

  selectedItemsCount = new BehaviorSubject<number>(0);

  constructor() { }
}
