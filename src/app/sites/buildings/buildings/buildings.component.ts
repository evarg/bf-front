import { Component, OnInit } from '@angular/core';
import { BuildingsService } from 'src/app/services/buildings.service';
import { Building } from 'src/app/models/building';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.scss']
})
export class BuildingsComponent implements OnInit {

  public dataSource: Building[] = [];

  constructor(private service: BuildingsService) { }

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
