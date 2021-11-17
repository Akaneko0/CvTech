import {Component, Input, OnInit} from '@angular/core';
import {Cv} from "../model/cv";
import {EmbaucheService} from "../services/embauche.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() cv: Cv | null = null;
  constructor(
    private embaucheService: EmbaucheService,
    private toastr: ToastrService
  ) { }
  ngOnInit(): void {
  }

  embaucher() {
    if (this.embaucheService.embaucher(this.cv)) {
      //toast succes
      this.toastr.success(`${this.cv?.firstname} ${this.cv?.name} a été ajouté avec succès`);
    } else {
      //toast erreur
      this.toastr.warning(`${this.cv?.firstname} ${this.cv?.name} est déjç pré embauché`);
    }
  }
}
