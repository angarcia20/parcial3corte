import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

interface AppState{
    events:[];
}

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  events:[];
  favoriteSeason: string;
  seasons: string[] = ["Iniciado", "En curso", "Finalizado"];

  constructor(private store: Store<AppState>) { 
    this.store.subscribe(
      state =>{
        this.events = state.events;
        console.log("eventos ", this.events);
      }
    );
  }

  ngOnInit(): void {
  }

}
