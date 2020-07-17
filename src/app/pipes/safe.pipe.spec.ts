import { TestBed } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';

import { SafePipe } from './safe.pipe';

describe('SafePipe', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        {
          provide: DomSanitizer,
          useValue: {
            sanitize: () => 'safeString',
            bypassSecurityTrustHtml: () => 'safeString',
            bypassSecurityTrustStyle: () => 'safeString',
            bypassSecurityTrustScript: () => 'safeString',
            bypassSecurityTrustUrl: () => 'safeString',
            bypassSecurityTrustResourceUrl: () => 'safeString'
          }
        }
      ]
    })
  );

  // tslint:disable-next-line: typedef
  function setup() {
    const domSanitizer: DomSanitizer = TestBed.inject(DomSanitizer);
    const pipe: SafePipe = new SafePipe(domSanitizer);

    return { pipe };
  }

  it('Pipe is defined', () => {
    const { pipe } = setup();
    expect(pipe).toBeDefined();
  });

  it('should return empty string on undefined/empty input', () => {
    const { pipe } = setup();
    const type = 'html';

    expect(pipe.transform(undefined, type)).toBe('');
    expect(pipe.transform('', type)).toBe('');
  });

  it('should convert html', () => {
    const { pipe } = setup();
    const text = `<div class="some-class"><p>Some text</p></div>`;
    const type = 'html';

    expect(pipe.transform(text, type)).toBe('safeString');
  });

  it('should throw an error if none-existing type is passed in', () => {
    const { pipe } = setup();
    const text = `<div class="some-class"><p>Some text</p></div>`;
    const type = 'someNoneExistingType';
    const expectedError = `Invalid safe type specified: ${type}`;

    expect(() => pipe.transform(text, type)).toThrow(new Error(expectedError));
  });

  it('should throw an error if undefined type is passed in', () => {
    const { pipe } = setup();
    const text = `<div class="some-class"><p>Some text</p></div>`;
    const type = undefined;
    const expectedError = `Invalid safe type specified: ${type}`;

    expect(() => pipe.transform(text, type)).toThrow(new Error(expectedError));
  });

  it('should throw an error if null type is passed in', () => {
    const { pipe } = setup();
    const text = `<div class="some-class"><p>Some text</p></div>`;
    const type = null;
    const expectedError = `Invalid safe type specified: ${type}`;

    expect(() => pipe.transform(text, type)).toThrow(new Error(expectedError));
  });
});
