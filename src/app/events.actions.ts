import { createAction, props } from '@ngrx/store';
import { Events } from './modelEvents';


export const allevents = createAction('[Events] allevents');
export const createevent = createAction('[Events] createevent',
props<{nombre:string;descripcion:string; fecha:Date;estado:string;}>());
export const findevent = createAction('[Events] findevent',
props<{name:string}>()
);
export const editevent = createAction('[Events] editevent',
props<{nombre:string;descripcion:string; fecha:Date;estado:string;}>());

