import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  private url: string;
  private mockUrl: string;

  constructor(private http: HttpClient) {
    this.url = environment.apiUrl;
    this.mockUrl = environment.baseUrl + "assets/mocks";
  }

  list(): Observable<Client[]> {
    return this.http.get<Client[]>(this.mockUrl + '/clients.json');
    return this.http.get<Client[]>(this.url + '/clients');
  }
}
