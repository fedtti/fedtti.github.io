import {
  Component,
  OnInit,
  inject,
  type Signal
} from '@angular/core';
import { ThemeService } from '../../../services/theme';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.html',
  styleUrl: './theme.scss',
})
export class ThemeComponent implements OnInit {
  protected readonly themeService: ThemeService = inject(ThemeService);
  protected readonly theme: Signal<'system' | 'light' | 'dark'> = this.themeService.getTheme();

  ngOnInit(): void {
    this.themeService.savedTheme();
  }
}
