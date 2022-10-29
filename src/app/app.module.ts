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

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LandingComponent,
    SideNavComponent,
    ArchivComponent,
    EventsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatSidenavModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
