import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksDataService } from '../services/books-data.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  book:any;

  constructor(private _service :BooksDataService , private route: ActivatedRoute) { }

  ngOnInit(): void {
    let  id= this.route.snapshot.paramMap.get('id');
    this._service.getBookById(id).subscribe((b:any)=>{this.book = b});
  }

}
