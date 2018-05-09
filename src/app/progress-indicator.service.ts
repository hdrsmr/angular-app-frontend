import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressIndicatorService {

  private status = new Subject<any>();

  getStatus(): Observable<any> {
    return this.status.asObservable();
  }

  toggleIndiCator(data: any) {
    this.status.next(data);
  }

  constructor() {
  }
}
