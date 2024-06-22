import { Component, OnDestroy } from '@angular/core';
import { UserActivateService } from './user-activate.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{
  title = 'observable-learning';
  isActive = false;
  userSubscription: Subscription;

  constructor(private userActivateService: UserActivateService){
    // this.userActivateService.activateUser.subscribe(active => {
    //   this.isActive = active;
    // });
    this.userSubscription = this.userActivateService.activeEmitter.subscribe(active => {
      this.isActive = active;
    });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }


}
