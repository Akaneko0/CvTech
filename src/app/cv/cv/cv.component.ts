import { Component, OnInit } from '@angular/core';
import {Cv} from "../model/cv";
import {HelloService} from "../../services/hello.service";
import {TodoService} from "../../todo/services/todo.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  selectedCv: Cv | null = null;
  constructor(
    private hello: HelloService,
    private todoService: TodoService,
    private toaster: ToastrService
  ) { }

  ngOnInit(): void {
    this.toaster.info('Bienvenu dans notre CvTech')
  }

  getSelecetdCv(cv: Cv | null) {
    this.selectedCv = cv;
    this.todoService.logTodos();
  }
}
