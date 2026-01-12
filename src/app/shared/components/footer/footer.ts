import {
  Component,
  Input,
  inject
} from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  imports: [ FontAwesomeModule ],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class FooterComponent {
  @Input() name!: string;
  protected readonly year: number = new Date().getFullYear();

  constructor() {
    const library = inject(FaIconLibrary);
    library.addIcons(faHeart);
  }
}
