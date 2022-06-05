import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookstoreAppComponent } from './components/bookstore-app/bookstore-app.component';
import { CartListComponent } from './pages/cart/cart-list/cart-list.component';
import { ProductListComponent } from './pages/product-list/product-list.component';

const routes: Routes = [
  { path: '', component: BookstoreAppComponent },
  { path: 'books', component: ProductListComponent },
  { path: 'cart', component: CartListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
