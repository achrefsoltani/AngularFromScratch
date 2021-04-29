import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testngfor',
  templateUrl: './testngfor.component.html',
  styleUrls: ['./testngfor.component.css']
})
export class TestngforComponent implements OnInit {
  series = [
    {name: 'Game of thrones', type: 'Fiction'},
    {name: 'House of cards', type: 'Thriller'},
    {name: 'Simpsons', type: 'Comedy'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
