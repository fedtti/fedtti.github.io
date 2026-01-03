import {
  Component,
  Input,
  inject
} from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-hero',
  imports: [ FontAwesomeModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  @Input() name!: string;
  @Input() role!: string;

  constructor() {
    const library = inject(FaIconLibrary);
    library.addIcons(faGithub);
  }
}
