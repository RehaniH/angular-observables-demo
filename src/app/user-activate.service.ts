import { Injectable, EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserActivateService{

    activateUser:EventEmitter<boolean> = new EventEmitter<boolean>(); // old method
    activeEmitter = new Subject<boolean>(); // new method
    constructor(){}

}