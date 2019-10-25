import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlmacenService {

  private _dataSource = new BehaviorSubject<Array<any>>([]);
  dataSource$ = this._dataSource.asObservable();

  constructor() { }

  public setData(data: Array<any>){
    this._dataSource.next(data);
  }
}
