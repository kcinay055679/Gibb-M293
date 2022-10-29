import { Injectable } from '@angular/core';
export class NavElement{
  text?:string;
  path?:string;
}

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  navElements:NavElement[] = [
    {text:"Home", path:"home"},
    {text:"Tactics", path:"tactics"},
    {text:"Archiv", path:"archiv"},
    {text:"Events", path:"events"},

  ];

  constructor() { }
}
