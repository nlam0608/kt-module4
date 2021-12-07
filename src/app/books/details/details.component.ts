import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {BooksService} from "../../books.service";


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  detailForm?: FormGroup;
  id?: number;

  constructor(private bookService: BooksService,
              private fb: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.detailForm = this.fb.group({
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

  getBook(id: number) {
    return this.bookService.findById(id).subscribe(res => {
      this.detailForm = new FormGroup({
        title: new FormControl(res?.title),
        author: new FormControl(res?.author),
        description: new FormControl(res?.description),
      });
    })
  }
}
