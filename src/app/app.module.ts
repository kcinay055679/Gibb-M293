import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import { LandingComponent } from './landing/landing.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import { SideNavComponent } from './side-nav/side-nav.component';
import { ArchivComponent } from './archiv/archiv.component';
import { EventsComponent } from './events/events.component';
import { FooterComponent } from './footer/footer.component';
import {MatCardModule} from "@angular/material/card";
import { AddEventComponent } from './add-event/add-event.component';
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LandingComponent,
    SideNavComponent,
    ArchivComponent,
    EventsComponent,
    FooterComponent,
    AddEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
