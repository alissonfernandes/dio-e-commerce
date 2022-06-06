import { Component, DoCheck, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, DoCheck {

  numberItemsIntoCart = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.numberItemsIntoCart = this.cartService.getNumberItemsIntoCart();
  }

  ngDoCheck(): void {
    this.numberItemsIntoCart = this.cartService.getNumberItemsIntoCart();
  }

}
