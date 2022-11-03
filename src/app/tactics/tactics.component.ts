import { Component, OnInit } from '@angular/core';
import {CardContent} from "../models/CardContent";

@Component({
  selector: 'app-tactics',
  templateUrl: './tactics.component.html',
  styleUrls: ['./tactics.component.scss']
})
export class TacticsComponent implements OnInit {
  events: CardContent[] = [
    {
      title: "Italian game",
      subTitle: "Opening",
      description: "This is a good opening for beginners",
      image: "../../assets/openings/italian.png"
    },
    {
      title: "Sizilian",
      subTitle: "Opening",
      description: "This is a good opening for advanced players",
      image: "../../assets/openings/sizilian.png"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
