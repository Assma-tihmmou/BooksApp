import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../Models/Book';

const httpOptions={
  headers: new HttpHeaders({'content-type':'application/json','Access-Control-Allow-Credentials': 'true',
 } )
};

@Injectable({
  providedIn: 'root'
})


export class BooksDataService {

constructor(private _http: HttpClient) { }

  getBooks(){
   return this._http.get('http://localhost:8080/books')
  }

  deleteBook(id:number){
    return this._http.delete('http://localhost:8080/books/'+id);
  }

  addBook(book:any){
    let b = JSON.stringify(book);
    console.log(b)
    return this._http.post('http://localhost:8080/books', b, httpOptions);
  }

  getBookById(id:any){
    return this._http.get<Book>('http://localhost:8080/books/'+id);
  }

  updateBook(book:any){
    let b = JSON.stringify(book);
    console.log(b)
    return this._http.put('http://localhost:8080/books',b, httpOptions);
  }

  filterBooks(form:any){
    return this._http.get('http://localhost:8080/books/filter?title='
    +form.value.titleValue+'&categories='+form.value.categoryValue+'&author='+form.value.authorValue);
  }

}
