import {
  Component,
  inject,
  type Signal
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header';
import { FooterComponent } from './shared/components/footer/footer';
import { ProfileService } from './shared/services/profile';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly profileService: ProfileService = inject(ProfileService);
  protected readonly profile: Signal<any> = this.profileService.getProfile();
}
