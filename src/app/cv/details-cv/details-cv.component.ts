import { CvService } from './../services/cv.service';
import { Cv } from './../model/cv';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css']
})
export class DetailsCvComponent implements OnInit {
indice : any = null
cv: any = null

  constructor(private activatedRoute: ActivatedRoute, private cvService:CvService, private toaster:ToastrService,private router: Router,) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.indice = params.id;

      }
    )

    this.cv= this.cvService.getCvById(this.indice)


  }

  deleteCv(cv: Cv) {
    this.cvService.deleteCv(cv);
    this.toaster.error(`Le cv de ${cv.firstname} a été supprimé avec succès`)
    this.router.navigate(['cv']);

  }






}
