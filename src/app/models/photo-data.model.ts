export interface IBasicData {
  name: string;
  url: string;
}

export interface IPhotoData extends IBasicData {
  caption: string;
}

export class PhotoData implements IPhotoData {
  constructor(public name: string, public url: string, private author: IBasicData, private source: IBasicData) {}

  get caption(): string {
    return `Photo by <a href="${this.author.url}" target="_blank" rel="noopener noreferrer">${this.author.name}</a> from
      <a href="${this.source.url}" target="_blank" rel="noopener noreferrer">${this.source.name}</a>`;
  }
}
