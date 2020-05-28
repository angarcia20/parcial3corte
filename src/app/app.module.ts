import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { Routes, RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { AllEventsComponent } from './all-events/all-events.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { eventsReducer } from './events.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import {MatTabsModule} from '@angular/material/tabs';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: AllEventsComponent, pathMatch: 'full'},
  {path: 'create-event', component: CreateEventComponent, pathMatch: 'full'},
  {path: 'editEvent/:nombre', component: EditEventComponent, pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    CreateEventComponent,
    AllEventsComponent,
    EditEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatTabsModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({events: eventsReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    MatCardModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
