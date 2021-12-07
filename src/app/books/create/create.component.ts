import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {BooksService} from "../../books.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  data: any;

  formCreate: FormGroup = new FormGroup({
    title: new FormControl(),
    author: new FormControl(),
    description: new FormControl()
  })

  constructor(private booksService: BooksService,
              private router: Router) { }

  ngOnInit(): void {
  }

  save(){
    const  data = this.formCreate?.value
    this.booksService.store(data).subscribe(res=> {
      this.router.navigate(['books']).then()
    })
  }
}
