import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Events } from '../modelEvents';
import { Observable } from 'rxjs';
import { allevents } from '../events.actions';
import { Router } from '@angular/router';
import { AppState } from '../events.reducer';



@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.css']
})
export class AllEventsComponent implements OnInit {
  allevents:Events[];
  result;

  constructor(private store: Store<AppState>, private router: Router) { 

    this.store.subscribe(
      state =>{
        console.log("STATE", state.events);
       this.allevents=state.events;
        console.log("allevents", this.allevents);
/*
        this.result = Object.keys(state).map(function(key) {
          return [Number(key), state[key]];
        });

        console.log("result", this.result);*/
        
      }
    );

    console.log("distrach", this.store.dispatch(allevents()))
    
  }

  ngOnInit(): void {
/*
    this.obs = this.store.dispatch(allevents());
    
    console.log(this.obs);*/


  }

  editar(nombre:string){

    this.router.navigate(["/editEvent",nombre]);
  }

}
