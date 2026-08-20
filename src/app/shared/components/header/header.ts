import {
  Component,
  inject,
  type Signal
} from '@angular/core';
import { ThemeComponent } from './theme/theme';
import { ThemeService } from '../../services/theme';

@Component({
  selector: 'app-header',
  imports: [ ThemeComponent ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent {
  protected readonly themeService: ThemeService = inject(ThemeService);
  protected readonly theme: Signal<'auto' | 'light' | 'dark'> = this.themeService.getTheme();
}
