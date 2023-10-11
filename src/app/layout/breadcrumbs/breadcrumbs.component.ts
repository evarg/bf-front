import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BreadcrumbsService } from 'src/app/breadcrumbs.service';
import { Breadcrumb } from 'src/app/models/breadcrumb.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  public breadcrumbs$: Observable<Breadcrumb[]>;

  constructor(private readonly breadcrumbService: BreadcrumbsService) {
    this.breadcrumbs$ = breadcrumbService.breadcrumbs$;
  }

  ngOnInit(): void {
  }


}
