import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchivComponent } from './archiv/archiv.component';
import { EventsComponent } from './events/events.component';
import {LandingComponent} from "./landing/landing.component";
import { TacticsComponent } from './tactics/tactics.component';

const routes: Routes = [
  {path: 'home', component: LandingComponent},
  {path: 'tactics', component: TacticsComponent},
  {path: 'archiv', component: ArchivComponent},
  {path: 'events', component: EventsComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
