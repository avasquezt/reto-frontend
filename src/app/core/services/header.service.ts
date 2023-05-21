import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private header: BehaviorSubject<string> = new BehaviorSubject<string>('Agenda de citas');

  constructor() { }

  getHeader(): Observable<string>{
    return this.header.asObservable();
  }

  setHeader(header: string): void{
    this.header.next(header);
  }
}
