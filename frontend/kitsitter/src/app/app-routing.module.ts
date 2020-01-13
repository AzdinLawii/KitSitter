import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchComponent} from './search/search.component';
import {HomeComponent} from './home/home.component';
import {CalendarComponent} from './calendar/calendar.component';
import {CreateinfosComponent} from './createinfos/createinfos.component';
import {FormulaireComponent} from './formulaire/formulaire.component';

const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'home' , component: HomeComponent},
  {path: 'search', component: SearchComponent },
  {path: 'calendar' , component: CalendarComponent},
  {path: 'createinfos' , component: CreateinfosComponent},
  {path: 'login' , component:   FormulaireComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
export const routingComponent = [SearchComponent, HomeComponent, CreateinfosComponent,   FormulaireComponent];
