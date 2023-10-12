import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Building } from '../models/building';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuildingsService {
  private url: string;
  private mockUrl: string;

  constructor(private http: HttpClient) {
    this.url = environment.apiUrl;
    this.mockUrl = environment.baseUrl + "assets/mocks";
  }

  list(): Observable<Building[]> {
    return this.http.get<Building[]>(this.mockUrl + '/clients.json');
    return this.http.get<Building[]>(this.url + '/clients');
  }
}
