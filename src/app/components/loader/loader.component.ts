import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  isLoading$: BehaviorSubject<boolean>;

  constructor(private _loaderService: LoaderService) {}

  ngOnInit(): void {
    this.isLoading$ = this._loaderService.isLoading$;
  }
}
