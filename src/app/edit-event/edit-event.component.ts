import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { findevent ,editevent} from '../events.actions';
import { Events } from '../modelEvents';
import { AppState } from '../events.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {
  nombre: string;
  events:Events[];
  event: Events;
  favoriteSeason: string;
  seasons: string[] = ["Iniciado", "En curso", "Finalizado"];
  constructor(private route: ActivatedRoute, private store: Store<AppState>,private router: Router) { 
    this.store.subscribe(state=>{
      this.events = state.events;
      console.log('subs');
      console.log(this.events);
    })
    
  }




  ngOnInit(): void {
    this.route.paramMap.subscribe(
      datos =>{
        this.nombre = datos.get("nombre");
        console.log(this.nombre);

        this.events = this.events.filter( estado => estado.nombre == this.nombre );
        console.log("FILTER", this.events);
        this.event = new Events(this.events[0].nombre,this.events[0].descripcion,this.events[0].fecha,this.events[0].estado);
  
        console.log(this.event);
      }
    )

  }
  editar(descripcion:string,fecha: Date,estado:string){
this.store.dispatch(editevent({nombre:this.nombre,
                               descripcion:descripcion,
                               fecha:fecha,
                               estado:estado}));

   this.router.navigate(["/home"]);
  }

}
