import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() book: Book = {id: '', name:'', description: '', price: 0, quantity: 0, category: '', img: ''};

  constructor() { }

  ngOnInit(): void {
  }

}
