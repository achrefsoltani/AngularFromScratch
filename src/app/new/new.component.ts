import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  @Input() defaultColor = 'red';
  color = this.defaultColor;
  constructor() { }

  ngOnInit(): void {
  }
  changeColor1(newColor: string) {
    this.color = newColor;
  }
  receivecolor(message: string){
    alert(message);
  }
}
