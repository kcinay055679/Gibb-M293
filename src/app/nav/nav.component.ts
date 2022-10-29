import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {NavigationService} from "../services/navigation.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  constructor(public _navigationService:NavigationService) { }
  @Output() sidenav:EventEmitter<void> = new EventEmitter();
  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  isMobile() {
    return window.innerWidth < 750;
  }
}
