import { Injectable } from '@angular/core';
import { map, Observable, shareReplay, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  public clock: Observable<Date> | undefined;

  constructor() { 
    this.clock = timer(0, 1000).pipe(map(t => new Date()), shareReplay(1));
  }
}
