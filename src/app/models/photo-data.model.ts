export interface IBasicData {
  name: string;
  url: string;
}

export interface IPhotoData extends IBasicData {
  caption: string;
}

export class PhotoData implements IPhotoData {
  constructor(public name: string, public url: string, private _author: IBasicData, private _source: IBasicData) {}

  get caption(): string {
    return `Photo by <a href="${this._author.url}" target="_blank" rel="noopener noreferrer">${this._author.name}</a> from
      <a href="${this._source.url}" target="_blank" rel="noopener noreferrer">${this._source.name}</a>`;
  }
}
