import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  apiUrl = '';

  httpOptions = {
    Headers: new HttpHeaders({'Content-Type:': 'application/json'})
  }

  cartBooks: Array<Book> = [];
  book: Book = {id: '', name: '', description: '' ,price: 0 ,quantity: 0, category: '' ,img: ''};

  constructor(private httpClient: HttpClient) {
    this.getAllBooksFromCart();
   }

  getCart(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.apiUrl);
  }


  public getAllBooksFromCart():Array<Book> {
    let itemsCart: any = localStorage.getItem('itemsCart');
    let cartBooks = JSON.parse(itemsCart);
    if (!cartBooks) this.cartBooks = []
    else this.cartBooks = cartBooks;
    return this.cartBooks;
  }

  // PUT item to card
  public addToCard(book: Book){
    this.cartBooks.push(book);
    localStorage.setItem('itemsCart', JSON.stringify(this.cartBooks));
  }

  public removeFromCart(book: Book){
    let index = this.cartBooks.indexOf(book);
    this.cartBooks.splice(index, 1);
    localStorage.setItem('itemsCart', JSON.stringify(this.cartBooks));
  }

  
}
