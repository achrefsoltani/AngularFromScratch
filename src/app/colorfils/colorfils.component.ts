import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-colorfils',
  templateUrl: './colorfils.component.html',
  styleUrls: ['./colorfils.component.css']
})
export class ColorfilsComponent implements OnInit {
  @Output() sendColorToDad= new EventEmitter();
  color ="red";
  constructor() { }

  ngOnInit(): void {
  }
  changeColor (couleur: string){
    this.color=couleur;
    this.sendColorToDad.emit(this.color);

  }
}
