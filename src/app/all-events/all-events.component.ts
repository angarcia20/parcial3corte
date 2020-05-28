import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Events } from '../modelEvents';
import { Observable } from 'rxjs';
import { allevents} from '../events.actions';
import { Router } from '@angular/router';
import { AppState, eventsReducer } from '../events.reducer';



@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.css']
})

export class AllEventsComponent implements OnInit {
  allevents:Events[];

  constructor(private store: Store<AppState>, private router: Router) { 

   // this.store.dispatch(allevents());

   //this.allevents = this.store.dispatch(allevents());
    
  }

  ngOnInit(): void {
    this.store.subscribe( events => {
      console.log(events);
      this.allevents=events.events}
    );       
  }
  
  estados(estado: string){
    if(estado === "Iniciado"){
      return 1;
    }else{
      if(estado === "En curso"){
          return 2;
      }
      else{
            return 3;
      }
    }
  }

  todoEventos(){
    this.store.dispatch(allevents());
  }

  editar(nombre:string){

    this.router.navigate(["/editEvent",nombre]);
  }

  onFinalizados(){
      this.allevents=this.allevents.filter(event=> event.estado === "Finalizado");
      console.log("finalizados");
  }
  onIniciados(){
    this.allevents=this.allevents.filter(event=> event.estado === "Iniciado");
    console.log("finalizados");
}
    onEnCurso(){
  this.allevents=this.allevents.filter(event=> event.estado === "En curso");
  console.log("finalizados");
}

  getTab(tab){
    this.store.dispatch(allevents());
      if(tab.index === 3){
        this.onFinalizados();
      }
      if(tab.index === 2){
        this.onEnCurso();
      }
      if(tab.index === 1){
        this.onIniciados();
      }
     

  }

}
