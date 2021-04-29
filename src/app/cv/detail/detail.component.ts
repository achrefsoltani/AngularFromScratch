import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cv } from '../model/cv';
import { CvService } from '../services/cv.service';
import { EmbaucheService } from '../services/embauche.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() cv: any = null;
  indice : any= null;
  constructor(private embaucheService: EmbaucheService,
    private toaster:ToastrService,
    private cvService:CvService,
    private activatedRoute: ActivatedRoute,
    private router: Router,) { }

  ngOnInit(): void {
  }
  embaucher() {
    if (this.embaucheService.embaucher(this.cv)) {
      this.toaster.success(
        `Félicitations ${this.cv.name} ${this.cv.firstname} a été préslectionné`
      );
    } else {
      this.toaster.warning(
        `${this.cv.name} ${this.cv.firstname} est déjà préslectionné`
      );
    }
  }

  detail(){
    this.indice= this.cv.id;
    this.router.navigate(['detail', this.indice]);





  }
}
