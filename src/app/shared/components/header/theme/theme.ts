import { Component, inject } from '@angular/core';
import { ThemeService } from '../../../services/theme';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.html',
  styleUrl: './theme.scss',
})
export class ThemeComponent {
  protected readonly themeService = inject(ThemeService);

}
