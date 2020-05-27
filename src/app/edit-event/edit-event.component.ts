import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { findevent } from '../events.actions';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {
  nombre: string;
  favoriteSeason: string;
  seasons: string[] = ["Iniciado", "En curso", "Finalizado"];
  constructor(private route: ActivatedRoute, private store: Store) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      datos =>{
        this.nombre = datos.get("nombre");
        console.log(this.nombre);
      console.log(this.store.dispatch(findevent({nombre: this.nombre})));

      }
    )

  }

}
