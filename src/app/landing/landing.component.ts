import { Component, OnInit } from '@angular/core';
import {Player} from "../models/player";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor() { }
  players:Player[] = [
    {name:"Magnus Carlsen", imagePath:"../../assets/chessPlayers/magnus_carlsen.png"},
    {name:"Ding Liren", imagePath:"../../assets/chessPlayers/ding_liren.jpg"},
    {name:"Ian Nepomniachtchi", imagePath:"../../assets/chessPlayers/ian_nepomniachtchi.jpg"},
    {name:"Alireza Firouzja", imagePath:"../../assets/chessPlayers/alireza_firouzja.jpg"},
    {name:"Hikaru Nakamura", imagePath:"../../assets/chessPlayers/hikaru_nakamura.jpg"},
    {name:"Fabiano Caruana", imagePath:"../../assets/chessPlayers/fabiano_caruana.jpg"},
  ]
  ngOnInit(): void {
  }

}
