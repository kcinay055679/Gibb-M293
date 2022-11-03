import { Component, OnInit } from '@angular/core';
import {CardContent} from "../models/CardContent";

@Component({
  selector: 'app-archiv',
  templateUrl: './archiv.component.html',
  styleUrls: ['./archiv.component.scss']
})
export class ArchivComponent implements OnInit {
  events: CardContent[] = [
    {
      title: "Italian game",
      subTitle: "Opening",
      description: "This was a game at the Reykjavic Rapid in 2004 between the past and future world champion.",
      image: "../../assets/chessPlayers/magnus.png"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
