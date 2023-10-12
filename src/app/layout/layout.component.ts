import { Component, OnInit } from '@angular/core';
import { BreadcrumbsService } from '../services/breadcrumbs.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(public breadcrumpsService: BreadcrumbsService) { }

  ngOnInit(): void {
  }

}
