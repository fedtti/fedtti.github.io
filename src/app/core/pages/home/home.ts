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

  protected isActive: number = 0; // Index of the active menu item’s link (default to 0).

  /**
   * Toggle the active menu item’s link.
   * @param {number} index - Index of the menu item’s link to toggle as active.
   */
  protected toggleActive(index: number): void {
    this.isActive = index;
  }

  /**
   * Handle the scroll event.
   */
  @HostListener('window:scroll', ['$event'])
  protected handleScroll(event: Event): void {
    const scrollPosition = window.scrollY;
    const sections = document.querySelectorAll('section');

    for (let index = 0; index < sections.length; index++) {
      const section = sections[index];
      const sectionOffsetTop = section.offsetTop;
      const sectionOffsetHeight = section.offsetHeight;

      if (scrollPosition >= sectionOffsetTop && scrollPosition < (sectionOffsetTop + sectionOffsetHeight)) {
        this.toggleActive(index);
        break;
      }
    }
  }
}
