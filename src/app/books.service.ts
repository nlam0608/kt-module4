import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";
let API_URL = `${environment.apiURL}`
@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private  http: HttpClient) { }

  getAll(): Observable<any[]>{
    return this.http.get<any[]>(API_URL + '/books');
  }

  store(data: any): Observable<any>{
    return  this.http.post<any>(API_URL + '/books', data);
  }

  delete(id: any): Observable<any>{
    return this.http.get<any>(API_URL + '/books' + id);
  }

  update(id: number, book: any): Observable<any> {
    return this.http.put<any>(`${API_URL}/books/${id}`, book);
  }

  findById(id: number): Observable<any> {
    return this.http.get<any>(`${API_URL}/books/${id}`);
  }

}
