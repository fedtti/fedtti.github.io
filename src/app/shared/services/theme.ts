import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  private theme: 'system' | 'light' | 'dark' = 'system';

  getTheme(): 'system' | 'light' | 'dark' {
    return this.theme;
  }

  setTheme(theme: 'system' | 'light' | 'dark'): void {

    this.theme = theme;
  }
}
