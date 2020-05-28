import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Events } from '../modelEvents';
import { createevent } from '../events.actions';
import { Observable } from 'rxjs';
import { AppState } from '../events.reducer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  events:[];
  event: Events;
  favoriteSeason: string;
  seasons: string[] = ["Iniciado", "En curso", "Finalizado"];

  constructor(private store: Store<AppState>, private router: Router) { 
    this.event={
      nombre:"",
      descripcion:"",
      fecha:null,
      estado:""
    }
    console.log("model event", this.event);
   
  }

  ngOnInit(): void {
  }
  createEvent(){
    console.log(this.event.nombre);
    console.log(this.event)
    this.store.dispatch(createevent({nombre:this.event.nombre,descripcion:this.event.descripcion,fecha:this.event.fecha,estado:this.event.estado}));
    this.router.navigate(["/home"]);

  }




}
