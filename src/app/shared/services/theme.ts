import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class Theme {
  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

}
