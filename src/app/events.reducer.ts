import { Action, createReducer, on} from '@ngrx/store';
import { createevent } from './events.actions';



export const initialState =[];
let arr={
    nombre:"",
    descripcion:"",
    fecha: Date,
    estado: ""
}
 
const _eventsReducer = createReducer(initialState,
  on(createevent, (state, { } )=> state)
);
 
export function eventsReducer(state, action) {
  return _eventsReducer(state, action);
}