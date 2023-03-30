export class Book{
  id:number;
  title:string;
  description:string;
  isbn:string;
  author:string;
  categories:string

  constructor( id:number, title:string, description:string,isbn:string ,author:string, categories:string){
    this.id = id;
    this.title=title;
    this.description=description;
    this.isbn=isbn;
    this.author=author;
    this.categories=categories
  }
}
