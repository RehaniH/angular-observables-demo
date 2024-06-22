import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, filter, interval, map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstSubscription!: Subscription;

  constructor() { }

  ngOnInit(): void {
    // this.firstSubscription = interval(1000).subscribe((count)=>{
    //   console.log(count);
    // });

    const customObservable = Observable.create((observe: any)=>{
      let count = 0;
      setInterval(()=>{
        observe.next(count); // also has the methods observe.error() and observe.complete()
        if ( count === 4 ){
          observe.complete(); // if the observer completes, no need to unsubscribe from the component itself
        }
        if (count > 3){
          observe.error(new Error('Count is greater than 3!')); // if the error occurs, the observable does not get completed, instead it gets cancelled
        }
        count++;
      }, 1000);
    });


    this.firstSubscription =     customObservable.pipe(filter((data: number)=>{
      return data > 0;
    }),
      map((data: number) => {
        return 'Round: ' + (data+ 1);
      })
    ).subscribe( (data: number) => {
      console.log(data);
    }, (error: any) => {
      console.log(error);
      alert(error.message);
    }, () => {
      console.log('Completed!');
    });
  }

  ngOnDestroy(): void {
    this.firstSubscription.unsubscribe();
  }

}
