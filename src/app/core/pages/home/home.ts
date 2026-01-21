import {
  Component,
  HostListener,
  inject,
  type Signal
} from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { HeroComponent } from '../../layouts/hero/hero';
import { AboutComponent } from '../../layouts/about/about';
import { ProfileService } from '../../../shared/services/profile';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [
    FontAwesomeModule,
    HeroComponent,
    AboutComponent
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {
  protected readonly profileService: ProfileService = inject(ProfileService);
  protected readonly profile: Signal<any> = this.profileService.getProfile();

  constructor() {
    const library = inject(FaIconLibrary);
    library.addIcons(faCircle);
  }

  protected isActive: number = 1; // Index of the active menu item’s link.

  /**
   * Toggle the active menu item’s link.
   * @param {number} index - Index of the menu item’s link to toggle as active.
   */
  protected toggleActive(index: number) {
    this.isActive = index;
  }

  @HostListener('window:scroll')
  /**
   * Handle the scroll event.
   */
  protected handleScroll() {
    const scrollPosition = window.scrollY;
    const sections = document.querySelectorAll('section');

    for (let index = 0; index < sections.length; index++) {
      const section = sections[index];
      const sectionOffsetTop = section.offsetTop;
      const sectionOffsetHeight = section.offsetHeight;

      if (scrollPosition >= sectionOffsetTop && scrollPosition < sectionOffsetTop + sectionOffsetHeight) {
        this.toggleActive(index + 1);
        break;
      }
    }
  }
}
