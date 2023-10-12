import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/items.service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  public dataSource: Item[] = [];

  constructor(private service: ItemsService) { }

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
