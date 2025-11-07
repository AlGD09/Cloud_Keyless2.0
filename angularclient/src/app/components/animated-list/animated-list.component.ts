import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
} from '@angular/animations';

@Component({
  selector: 'app-animated-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animated-list.component.html',
  animations: [
    trigger('fadeInScale', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scaleY(0.95)' }),
        animate('150ms ease-out', style({ opacity: 1, transform: 'scaleY(1)' })),
      ]),
      transition(':leave', [
        animate('100ms ease-in', style({ opacity: 0, transform: 'scaleY(0.95)' })),
      ]),
    ]),
  ],
})
export class AnimatedListComponent {
  @Input() items: string[] = [];
  @Output() itemSelect = new EventEmitter<{ item: string; index: number }>();

  selectedIndex: number | null = null;

  selectItem(item: string, index: number) {
    this.selectedIndex = index;
    this.itemSelect.emit({ item, index });
  }
}
