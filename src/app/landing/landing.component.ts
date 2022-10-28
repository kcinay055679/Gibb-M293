import { Component, OnInit } from '@angular/core';
import {Player} from "../models/player";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor() { }
  players:Player[] = [{name:"Magnus Carlsen", imagePath:""}]
  ngOnInit(): void {
  }

}
