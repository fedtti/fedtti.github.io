import { Component, inject } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { HeroComponent } from '../../layouts/hero/hero';
import { AboutComponent } from '../../layouts/about/about';

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
  protected readonly name: string = 'Federico Moretti';
  protected readonly role: string = 'Software Developer';

  constructor() {
    const library = inject(FaIconLibrary);
    library.addIcons(faCircle);
  }
}
