import { Action, createReducer, on} from '@ngrx/store';
import { createevent, allevents, findevent, editevent} from './events.actions';
import { Events } from './modelEvents';


export interface AppState{
  events: Events[];
};

export const initialState: Events[] = [
   new Events("nombreini", "descripcion ini", new Date(), "Finalizado"),
   new Events("nombreini2", "descripcion ini2", new Date(), "Iniciado"),
   new Events("nombreini3", "descripcion ini3", new Date(), "En curso"),

];
 
const _eventsReducer = createReducer(initialState,
on(createevent, (state, {    nombre,
                            descripcion,
                            fecha,
                            estado} )=>   [...state,new Events(nombre,descripcion,fecha,estado)] ),



  on(allevents, state => state.map(events=>{
    return{
      ...events
    }
  })),


  on(findevent, (state,{name }) => state.filter( evento => { evento.nombre == name;   } )),



  on(editevent, (state, {nombre,
                        descripcion,
                        fecha,
                        estado} )=>{
                          return state.map( events => {
                            if ( events.nombre === nombre ) {
                              return {
                                ...events,
                                descripcion,
                                fecha,
                                estado     
                              };
                            }  else {
                              return events;
                            }
                          });
                        })
);
 
export function eventsReducer(state, action) {
  return _eventsReducer(state, action);
}