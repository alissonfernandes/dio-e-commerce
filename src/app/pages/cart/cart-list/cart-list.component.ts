import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  cartBooks: Array<Book> = [];

  constructor(private cartService: CartService,) { }

  ngOnInit(): void {
    this.cartBooks = this.cartService.getAllBooksFromCart();
  }

  removeFromCart(book: Book) {
    this.cartService.removeFromCart(book);
  }
}
