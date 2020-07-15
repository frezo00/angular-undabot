import { Component, OnInit } from '@angular/core';

import { NavigationLink } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  links: NavigationLink[];

  ngOnInit(): void {
    this.links = [
      { url: '', title: 'Home' },
      { url: 'contact', title: 'Contact' }
    ];
  }
}
