import {
  Component,
  Input,
  inject
} from '@angular/core';
import { GravatarService } from '../../../shared/services/gravatar';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutComponent {
  @Input() name!: string;
  @Input() email!: string;

  protected gravatarUrl!: string;

  constructor() {
    const gravatarService: GravatarService = inject(GravatarService);

    gravatarService
      .getGravatarUrl('hello@federicomoretti.it') // TODO (@fedtti): Make it dynamic.
      .then(url => this.gravatarUrl = url)
      .catch(error => console.error(`❌ ${(error as Error).message}.`));
  }
}
