import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eventos';
        constructor(private router: Router){

}
createEvent(){
  this.router.navigate(["/create-event"]);
}
allEvents(){
  this.router.navigate(["/home"]);
}
editEvent(){
  this.router.navigate(["/editEvent"]);
}

}
