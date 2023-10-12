import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ItemGroup } from '../models/item-group';

@Injectable({
  providedIn: 'root'
})
export class ItemsGroupsService {
  private url: string;
  private mockUrl: string;

  constructor(private http: HttpClient) {
    this.url = environment.apiUrl;
    this.mockUrl = environment.baseUrl + "assets/mocks";
  }

  list(): Observable<ItemGroup[]> {
    return this.http.get<ItemGroup[]>(this.mockUrl + '/items-groups.json');
    return this.http.get<ItemGroup[]>(this.url + '/items-groups');
  }
}
