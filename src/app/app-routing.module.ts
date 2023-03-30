import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BooksListComponent } from './books-list/books-list.component';

const routes: Routes = [
  {path:'home', component:BooksListComponent},
  {path:'book', component:BookFormComponent},
  {path:'book/:id', component:BookFormComponent},
  {path:'detail/:id', component:BookDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
