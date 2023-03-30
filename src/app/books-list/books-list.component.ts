import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksDataService } from '../services/books-data.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  books:any;

  searchInputs ={
    titleValue:'',
    categoryValue:'',
    authorValue:''
  }

  constructor(private _service: BooksDataService, private _route: Router) { }

  getBooks(){
    this._service.getBooks().
    subscribe(
      data => {
         this.books = data;
      })
  }

  ngOnInit(): void {
    this.getBooks();
  }

  editBook(id:any){
    this._route.navigateByUrl("book/"+id)
  }

  deleteBook(id:number){
    var r = confirm("Are you sure you want to Permanently delete this order?");
    if (r == true) {
      this._service.deleteBook(id).subscribe(()=>  this.getBooks());
    } else {
      this._route.navigateByUrl("home")

    }
  }

  displayDescription(book:any){
    this._route.navigateByUrl('detail/'+book.id)
  }

  onSubmit(form:any){
    this._service.filterBooks(form). subscribe(
      data => {
         this.books = data;
      });
  }

}
