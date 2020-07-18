import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { NavigationLink } from './models';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  links: NavigationLink[];
  isLoading$: BehaviorSubject<boolean>;

  constructor(private _loaderService: LoaderService) {}

  ngOnInit(): void {
    this.isLoading$ = this._loaderService.isLoading$;
    this.links = [
      { url: '', title: 'Home' },
      { url: 'contact', title: 'Contact' }
    ];
  }
}
