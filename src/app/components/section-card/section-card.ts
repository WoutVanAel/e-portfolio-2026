import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-section-card',
  imports: [RouterModule, MatIconModule],
  templateUrl: './section-card.html',
  styleUrl: './section-card.css',
})
export class SectionCard {
  readonly title = input<string>();
  readonly description = input<string>();
  readonly icon = input<string>();
  readonly path = input<string>();
  readonly color = input<string>('bg-blue-500');
}
