import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponentComponent implements OnInit {

  public profile = {
    shortName: "B. Grabski",
    longName: "Bartosz Grabski",
    jobTitle: "administrator systemu",
    userIcon: "assets/img/profile-img.jpg"
  }

  constructor() { }

  ngOnInit(): void {
  }

  toggleSideBar() {
    document.querySelector('body')?.classList.toggle('toggle-sidebar')
  }

  toggleSearch() {
    document.querySelector('.search-bar')?.classList.toggle('search-bar-show')
  }

}
