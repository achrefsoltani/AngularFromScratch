import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';
import { LoggerService } from 'src/app/services/logger.service';
import { TodoService } from 'src/app/todo/services/todo.service';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  selectedCv = null;
  date = new Date();
  constructor(private loggerService: LoggerService,

    private helperService: HelperService,
    private TodoService: TodoService) { }

  ngOnInit(): void {
    this.helperService.whoAmI();
    this.loggerService.logger('Hi i am the cv component');
  }
  findSelectedCv(selectedCv: any) {
    this.selectedCv = selectedCv;
    this.TodoService.logger();

  }
}
