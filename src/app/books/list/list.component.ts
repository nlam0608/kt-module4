import { Component, OnInit } from '@angular/core';
import {BooksService} from "../../books.service";
import {Books} from "../../books";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  books: Books[] = []
  constructor(private  booksService: BooksService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.booksService.getAll().subscribe(books => {
      this.books = books
    })
  }

  delete(bookId: any){
    if(confirm("Bạn có chắc  muốn xóa ?")){
      this.booksService.delete(bookId).subscribe(res => {
        this.books = res;
        this.getAll();
      })
    }
  }

}
