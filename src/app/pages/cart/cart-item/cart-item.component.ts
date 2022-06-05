import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() book: Book = {id: '', name: '', description: '' ,price: 0 ,quantity: 0, category: '' ,img: ''};
  @Output() remove = new EventEmitter;

  selectedToBuy = false;


  constructor() { }

  ngOnInit(): void {
  }

  removeItem(): void {
    this.remove.emit(this.book);
  }

  markAsSelectToBuy(): void {
    this.selectedToBuy = true;
  }

}
