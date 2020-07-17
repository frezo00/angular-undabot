import { Pipe, PipeTransform } from '@angular/core';
import { SafeHtml, SafeResourceUrl, SafeScript, SafeStyle, SafeUrl } from '@angular/platform-browser';

@Pipe({ name: 'safe' })
export class SafePipeMock implements PipeTransform {
  transform(_value: any, _type: string): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
    return '';
  }
}
