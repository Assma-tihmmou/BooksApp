import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksDataService } from '../services/books-data.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  isUpdate: boolean=false;

  book:any={
    isbn:'',
    title:'',
    description:'',
    author:'',
    categories:''
  }

  id:any;


  constructor(private _service: BooksDataService,
    private _router :Router,private _route :ActivatedRoute) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id!==undefined) {
        this.isUpdate = true;
        this._service.getBookById(this.id).subscribe(t => {
          this.book=t
        });
      }
    });
  }

  onSubmit(form: any) {

    if (this.isUpdate) {
      this._service.updateBook(form.value).subscribe();
      this._router.navigateByUrl('home')

    } else{
      this._service.addBook(form.value).subscribe();
      this._router.navigateByUrl('home')
    }
  }


}
