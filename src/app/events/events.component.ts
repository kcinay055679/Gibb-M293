import {Component, OnInit} from '@angular/core';
import {CardContent} from "../models/CardContent";
import {MatDialog} from "@angular/material/dialog";
import {AddEventComponent} from "../add-event/add-event.component";


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  events: CardContent[] = [
    {
      title: "World championship",
      subTitle: "America",
      description: "Just a description",
      image: "../../assets/event_background.png"
    },
    {
      title: "World championship",
      subTitle: "America",
      description: "Just a description",
      image: "../../assets/event_background.png"
    },
    {
      title: "World championship",
      subTitle: "America",
      description: "Just a description",
      image: "../../assets/event_background.png"
    },
    {
      title: "World championship",
      subTitle: "America",
      description: "Just a description",
      image: "../../assets/event_background.png"
    }
  ];

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  openNewEventModal() {
    const dialogRef = this.dialog.open(AddEventComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.events.push(result);
    });
  }
}
