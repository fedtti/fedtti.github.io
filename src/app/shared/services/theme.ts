import { DOCUMENT } from '@angular/common';
import {
  Injectable,
  Inject,
  signal,
  type WritableSignal,
  type Signal
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  private theme: WritableSignal<'light' | 'dark' | 'auto'> = signal<'light' | 'dark' | 'auto'>('auto');

  getTheme(): Signal<'light' | 'dark' | 'auto'> {
    return this.theme.asReadonly();
  }

  setTheme(theme: 'light' | 'dark' | 'auto'): void {
    switch (theme) {
      case 'light':
        this.document.documentElement.setAttribute('data-bs-theme', 'light');
        localStorage.setItem('theme', 'light');
        break;

      case 'dark':
        this.document.documentElement.setAttribute('data-bs-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        break;

      case 'auto':
      default:
        this.document.documentElement.setAttribute('data-bs-theme', 'auto');
        localStorage.removeItem('theme');
    }

    this.theme.update(() => theme);
  }

  toggleTheme(): void {
    const currentTheme: 'light' | 'dark' | 'auto' = this.theme();

    switch (currentTheme) {
      case 'light':
        this.setTheme('dark');
        break;

      case 'dark':
        this.setTheme('light');
        break;

      case 'auto':
      default:
        typeof window.matchMedia !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? this.setTheme('light') : this.setTheme('dark');
    }
  }

  savedTheme(): void {
    const savedTheme: 'auto' | 'light' | 'dark' | null = localStorage.getItem('theme') as 'auto' | 'light' | 'dark' || null;

    if (!!savedTheme) this.setTheme(savedTheme);
  }
}
