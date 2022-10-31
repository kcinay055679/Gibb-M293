import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import { ChessEvent } from '../models/ChessEvent';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {
  eventForm= new FormGroup({
    name: new FormControl('',[Validators.required]),
    location: new FormControl('', [Validators.required]),
    description: new FormControl('',[Validators.required])
  });
  constructor(private dialogRef: MatDialogRef<AddEventComponent>) { }

  ngOnInit(): void {
  }

  submit(): void {
    let value = {
      ...this.getDefaultEvent(),
      ...this.eventForm.value
    } as ChessEvent;
    this.dialogRef.close(value)
  }

  getDefaultEvent(){
    return {
      name:"",
      location:"",
      description:"",
      image:"../../assets/event_background.png"} as ChessEvent
  }
}