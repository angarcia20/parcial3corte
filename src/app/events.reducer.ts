import { Action, createReducer, on} from '@ngrx/store';
import { createevent } from './events.actions';
import { Events } from './modelEvents';


export const initialState: Events[] = []
 
const _eventsReducer = createReducer(initialState,
  on(createevent, (state, {    nombre,
                            descripcion,
                            fecha,
                            estado} )=>   [...state,new Events(nombre,descripcion,fecha,estado)]
                             /* state.push(
                            {
                              nombre: nombre,
                              descripcion: descripcion,
                              fecha:fecha,
                              estado:estado
                            })]*/
                            )
);
 
export function eventsReducer(state, action) {
  return _eventsReducer(state, action);
}