import { createAction, props } from '@ngrx/store';


export const allevents = createAction('[Events] allevents');
export const createevent = createAction('[Events] createevent',
props<{nombre: String;descripcion: String;fecha: Date;estado: String;}>());