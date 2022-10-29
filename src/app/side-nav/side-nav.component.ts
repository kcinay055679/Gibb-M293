import {Component, OnInit, Output, ViewChild} from '@angular/core';
import {MatDrawer} from "@angular/material/sidenav";
import {NavigationService} from "../services/navigation.service";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  @ViewChild("drawer")
  drawer: MatDrawer;
  constructor(public _navigationService:NavigationService) { }

  public toggle(){
    this.drawer.toggle().then();
  }
  ngOnInit(): void {
  }


}
