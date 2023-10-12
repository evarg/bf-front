import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Item } from './models/item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private url: string;
  private mockUrl: string;

  constructor(private http: HttpClient) {
    this.url = environment.apiUrl;
    this.mockUrl = environment.baseUrl + "assets/mocks";
  }

  list(): Observable<Item[]> {
    return this.http.get<Item[]>(this.mockUrl + '/items.json');
    return this.http.get<Item[]>(this.url + '/items');
  }
}
