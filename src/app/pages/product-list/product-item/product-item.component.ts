import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() book: Book = {id: '', name:'', description: '', price: 0, quantity: 0, category: '', img: ''};

  @Output() remove = new EventEmitter;
  @Output() add = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  addItem(): void {
    this.add.emit(this.book);
  }

  removeItem(): void {
    this.remove.emit(this.book);
  }

}
