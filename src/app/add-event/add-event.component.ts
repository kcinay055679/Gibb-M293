import { Component, OnInit } from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validator, Validators} from "@angular/forms";
import { CardContent } from '../models/CardContent';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {
  eventForm= new UntypedFormGroup({
    name: new UntypedFormControl('',[Validators.required]),
    location: new UntypedFormControl('', [Validators.required]),
    description: new UntypedFormControl('',[Validators.required])
  });
  constructor(private dialogRef: MatDialogRef<AddEventComponent>) { }

  ngOnInit(): void {
  }

  submit(): void {
    let value = {
      ...this.getDefaultEvent(),
      ...this.eventForm.value
    } as CardContent;
    this.dialogRef.close(value)
  }

  getDefaultEvent(){
    return {
      title:"",
      subTitle:"",
      description:"",
      image:"../../assets/event_background.png"} as CardContent
  }
}
