import {
  Component,
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

  isActive: number = 1; //

  /**
   * Set the active menu item link.
   * @param {number} index - The index of the menu item link to set as active.
   */
  protected setActive(index: number) {
    this.isActive = index;
  }
}
