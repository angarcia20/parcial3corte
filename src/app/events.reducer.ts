import { Action, createReducer, on} from '@ngrx/store';
import { createevent, allevents, findevent } from './events.actions';
import { Events } from './modelEvents';


export interface AppState{
  events: Events[];
};

export const initialState: Events[]=[];
 
const _eventsReducer = createReducer(initialState,
on(createevent, (state, {    nombre,
                            descripcion,
                            fecha,
                            estado} )=>   [...state,new Events(nombre,descripcion,fecha,estado)] ),



  on(allevents, state => state),

/*
  on(findevent, (state,{nombre }) => {
    return state.map( events => {
      if ( events.nombre === nombre ) {
        return {
         ...events
        };
      }  else {
        return events;
      }
    });
  })*/
);
 
export function eventsReducer(state, action) {
  return _eventsReducer(state, action);
}