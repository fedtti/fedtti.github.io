import { Component } from '@angular/core';
import { type TimelineItems } from './types/items';

@Component({
  selector: 'app-timeline',
  imports: [],
  templateUrl: './timeline.html',
  styleUrl: './timeline.scss',
})
export class TimelineComponent {
  protected readonly items: TimelineItems = [
    {
      company: 'Smile.CX Tech (formerly EsoSphera, Covisian Group)',
      role: 'Full-Stack Developer at Technical Delivery',
      start: 'October 2024'
    },
    {
      company: 'Covisian',
      role: 'Full-Stack Developer at Professional Services',
      start: 'March 2022',
      end: 'June 2025'
    }
  ];
}
