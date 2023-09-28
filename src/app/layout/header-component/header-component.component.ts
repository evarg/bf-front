import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponentComponent implements OnInit {

  constructor() { }

  private sideBarElement = document.querySelector('.toggle-sidebar-btn');

  ngOnInit(): void {
    this.sideBarElement!.addEventListener('click', this.toggleSideBar)
    console.log(this.sideBarElement);
  }

  // select(el) {
  //   el = el.trim()
  //     return document.querySelector(el)
  // }

  // on(type, el, listener, all = false) {
  //     select(el, all).addEventListener(type, listener)
  // }

  // onScroll(el, listener) {
  //   el.addEventListener('scroll', listener)
  // }

  toggleSideBar() {
    console.log("klik");
    // this.on('click', '.toggle-sidebar-btn', function(e) {
    //   this.select('body').classList.toggle('toggle-sidebar')
    // })
  }

}
