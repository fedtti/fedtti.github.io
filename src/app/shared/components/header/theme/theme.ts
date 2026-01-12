import {
  Component,
  OnInit,
  inject,
  type Signal
} from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faCircleHalfStroke,
  faSun,
  faMoon
} from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from '../../../services/theme';

@Component({
  selector: 'app-theme',
  imports: [ FontAwesomeModule ],
  templateUrl: './theme.html',
  styleUrl: './theme.scss',
})
export class ThemeComponent implements OnInit {
  protected readonly themeService: ThemeService = inject(ThemeService);
  protected readonly theme: Signal<'system' | 'light' | 'dark'> = this.themeService.getTheme();

  constructor() {
    const library = inject(FaIconLibrary);
    library.addIcons(faCircleHalfStroke, faSun, faMoon);
  }

  ngOnInit(): void {
    this.themeService.savedTheme();
  }
}
