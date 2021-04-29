import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css']
})
export class PereComponent implements OnInit {

  messageToFiston = 'cc fiston';
  constructor() { }

  ngOnInit(): void {
  }
recieveDataFromSon (message: string){
  alert(message);
}
}
