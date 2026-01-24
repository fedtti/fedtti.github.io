import {
  Component,
  Input,
  OnInit,
  inject
} from '@angular/core';
import { GravatarService } from '../../../shared/services/gravatar';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutComponent implements OnInit {
  @Input() name!: string;
  @Input() email!: string;
  protected readonly gravatarService: GravatarService = inject(GravatarService);
  protected gravatarUrl!: string;

  ngOnInit(): void {
    this.gravatarUrl = this.gravatarService.getGravatarUrl(this.email);
  }
}
