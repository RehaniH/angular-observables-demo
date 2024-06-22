import { Component, OnInit } from '@angular/core';
import { UserActivateService } from '../user-activate.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userActivateService: UserActivateService) { }

  ngOnInit(): void {
  }

  public activate(){
    // this.userActivateService.activateUser.emit(true);
    this.userActivateService.activeEmitter.next(true);
  }

}
