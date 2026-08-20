import {
  Injectable,
  Inject,
  signal,
  type WritableSignal,
  type Signal
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor(@Inject(DOCUMENT) private readonly document: Document) {}
  private theme: WritableSignal<'auto' | 'light' | 'dark'> = signal<'auto' | 'light' | 'dark'>('auto');

  getTheme(): Signal<'auto' | 'light' | 'dark'> {
    return this.theme.asReadonly();
  }

  setTheme(theme: 'auto' | 'light' | 'dark'): void {
    switch (theme) {
      case 'auto':
        this.document.documentElement.setAttribute('data-bs-theme', 'auto');
        localStorage.removeItem('theme');
        break;
      case 'light':
        this.document.documentElement.setAttribute('data-bs-theme', 'light');
        localStorage.setItem('theme', 'light');
        break;
      case 'dark':
        this.document.documentElement.setAttribute('data-bs-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        break;
    }
    this.theme.update(() => theme);
  }

  toggleTheme(): void {
    const currentTheme: 'auto' | 'light' | 'dark' = this.theme();
    switch (currentTheme) {
      case 'auto':
        typeof window.matchMedia !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? this.setTheme('light') : this.setTheme('dark');
        break;
      case 'light':
        this.setTheme('dark');
        break;
      case 'dark':
        this.setTheme('light');
        break;
    }
  }

  savedTheme(): void {
    const savedTheme: 'auto' | 'light' | 'dark' | null = localStorage.getItem('theme') as 'auto' | 'light' | 'dark' || null;
    if (!!savedTheme) {
      this.setTheme(savedTheme);
    }
  }
}
