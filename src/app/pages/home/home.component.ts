import { Component, OnInit } from '@angular/core';

import { IBasicData, PhotoData } from '../../models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title: string;
  description: string;
  image: PhotoData;

  get author(): IBasicData {
    return { name: 'Nathan Dumlao', url: 'https://unsplash.com/@nate_dumlao' };
  }

  get source(): IBasicData {
    return { name: 'Unsplash', url: 'https://unsplash.com/' };
  }

  ngOnInit(): void {
    this.title = 'My favourite coffee';
    this.description = 'Pick your coffee & enjoy the day! ☕️';
    this.image = new PhotoData('Coffee', 'assets/images/coffee.jpg', this.author, this.source);
  }
}
