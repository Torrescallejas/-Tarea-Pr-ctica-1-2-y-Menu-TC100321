import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataSource2 = new BehaviorSubject<string>('Initial Data');
  currentData2 = this.dataSource2.asObservable();

  changeData2(data: string) {
    this.dataSource2.next(data);
  }

  private dataSource = new BehaviorSubject<string>('Initial Data');
  currentData = this.dataSource.asObservable();

  changeData(data: string) {
    this.dataSource.next(data);
  }

  constructor() { }
}
