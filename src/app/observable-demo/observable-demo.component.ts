import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.scss']
})
export class ObservableDemoComponent implements OnInit {
  numbersObservable$: Observable<number[]> = new Observable<number[]>((observer: Observer<number[]>) => {
    let count = 1;
    const interval = setInterval(() => {
      observer.next([count]);
      count++;
      if (count > 15) {  
        clearInterval(interval);
        
        observer.complete();
      }
    }, 1000);
  });

  constructor() { }

  ngOnInit(): void {
    // ...
  }
}
