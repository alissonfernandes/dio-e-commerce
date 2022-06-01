import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../models/book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = "";

  httpOptions = {
    Headers: new HttpHeaders({'Content-Type:': 'application/json'}) 
  }

  constructor(private httpClient: HttpClient) { }

  getBooks(): Observable<Book[]>{
    return this.httpClient.get<Book[]>(this.apiUrl);
  }

  getBook(id: string): Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.apiUrl}/id/${id}`);
  }
}
