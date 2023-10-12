import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/clients.service';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  public dataSource: Client[] = [];

  constructor(private service: ClientsService) { }

  ngOnInit(): void {
    this.handleData();
  }

  private handleData(): void {
    // this.changeViewState(ViewState.LOAD_ATTEMPT);
    this.service.list().subscribe({
      next: (data) => {
        this.dataSource = data;
        // this.dataSource.paginator = this.paginator;
        // this.dataSource.sort = this.sort;
        // this.changeViewState(ViewState.LOAD_SUCCESS);
      },
      error: (err) => {
        console.error(err);
        // this.changeViewState(ViewState.LOAD_ERROR);
      },
    });
  }

}
