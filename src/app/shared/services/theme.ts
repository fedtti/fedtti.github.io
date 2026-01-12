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
  private theme: WritableSignal<'system' | 'light' | 'dark'> = signal<'system' | 'light' | 'dark'>('system');

  getTheme(): Signal<'system' | 'light' | 'dark'> {
    return this.theme.asReadonly();
  }

  setTheme(theme: 'system' | 'light' | 'dark'): void {
    switch (theme) {
      case 'system':
        delete this.document.documentElement.dataset['theme'];
        localStorage.removeItem('theme');
        break;
      case 'light':
        this.document.documentElement.dataset['theme'] = 'light';
        localStorage.setItem('theme', 'light');
        break;
      case 'dark':
        this.document.documentElement.dataset['theme'] = 'dark';
        localStorage.setItem('theme', 'dark');
        break;
    }
    this.theme.update(() => theme);
  }

  toggleTheme(): void {
    const currentTheme: 'system' | 'light' | 'dark' = this.theme();
    switch (currentTheme) {
      case 'system':
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
    const savedTheme: 'system' | 'light' | 'dark' | null = localStorage.getItem('theme') as 'system' | 'light' | 'dark' || null;
    if (!!savedTheme) {
      this.setTheme(savedTheme);
    }
  }
}
