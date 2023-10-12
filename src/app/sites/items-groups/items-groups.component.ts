import { Component, OnInit } from '@angular/core';
import { ItemsGroupsService } from 'src/app/items-groups.service';
import { ItemGroup } from 'src/app/models/item-group';

@Component({
  selector: 'app-items-groups',
  templateUrl: './items-groups.component.html',
  styleUrls: ['./items-groups.component.scss']
})
export class ItemsGroupsComponent implements OnInit {

  public dataSource: ItemGroup[] = [];

  constructor(private service: ItemsGroupsService) { }

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
