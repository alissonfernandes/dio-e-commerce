import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  books: Array<Book> = [];

  constructor(private bookservice: BookService) { }

  ngOnInit(): void {
    this.generateBooks();
  }

  getBooks(): void{
    this.bookservice.getBooks().subscribe(resp => {
        this.books = resp;
      }, (err) => console.log('Erro ao buscar lista de books'));
  }

  private generateBooks(){
    let urlImg = 'https://images-na.ssl-images-amazon.com/images/I/51Xby92J9KL._SX346_BO1,204,203,200_.jpg';
    let urlImg2 = 'https://edit.org/photos/img/blog/zz7-flyer-personalizavel-para-capas-de-livros.jpg-840.jpg';
    let description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus odit iusto, adipisci eos amet ratione dolorum unde, reprehenderit expedita natus voluptatibus illum qui voluptas blanditiis incidunt debitis mollitia non quo.';
    this.books.push(
    {id: '1', name: 'O poder do hábito', description: description, price: 20,quantity: 50, category: 'Categoria1', img: urlImg},
    {id: '2', name: 'O poder do hábito', description: description, price: 20,quantity: 50, category: 'Categoria2', img: urlImg2},
    {id: '3', name: 'O poder do hábito', description: description, price: 20,quantity: 50, category: 'Categoria3', img: urlImg},
    {id: '4', name: 'O poder do hábito', description: description, price: 20,quantity: 50, category: 'Categoria4', img: urlImg2},
    {id: '5', name: 'O poder do hábito', description: description, price: 20,quantity: 50, category: 'Categoria5', img: urlImg},
    {id: '6', name: 'O poder do hábito', description: description, price: 20,quantity: 50, category: 'Categoria6', img: urlImg2},
    {id: '7', name: 'O poder do hábito', description: description, price: 20,quantity: 50, category: 'Categoria1', img: urlImg},
    {id: '8', name: 'O poder do hábito', description: description, price: 20,quantity: 50, category: 'Categoria2', img: urlImg2}
    );
  }

}
