import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {BooksService} from "../../books.service";


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  editFrom?: FormGroup;
  id?: number;
  constructor(private bookService: BooksService,
              private router: Router,
              private fb: FormBuilder,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.editFrom = this.fb.group({
      title: [''],
      author: [''],
      description: ['']
    })
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      // @ts-ignore
      this.getBook(this.id);
    })
  }
  updateBook(id: any) {
    const book = this.editFrom?.value;
    this.bookService.update(id, book).subscribe(res => {
      console.log(res)
      this.router.navigate(['/books']);

    })
  }
  getBook(id: number) {
    return this.bookService.findById(id).subscribe(res => {
      this.editFrom = new FormGroup({
        title: new FormControl(res?.title),
        author: new FormControl(res?.author),
        description: new FormControl(res?.description),
      });
    })
  }
}
