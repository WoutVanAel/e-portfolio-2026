import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

interface Project {
  id: number;
  title: string;
  path: string;
  summary: string;
  image: string;
  tags: string[];
  date: string;
}

@Component({
  selector: 'app-projects-page',
  imports: [RouterModule, MatIconModule],
  templateUrl: './projects-page.html',
  styleUrl: './projects-page.css',
})
export class ProjectsPage {
  projects: Project[] = [
    {
      id: 1,
      title: 'UI UX Kinepolis redesign',
      path: '/projects/ui-ux-kinepolis-redesign',
      summary: 'Een redesign van de desktop website van Kinepolis in Figma',
      image: 'images/projects/DierenApp-cover-image.png',
      tags: ['Figma', 'UX-UI', 'LoFi', 'HiFi', 'Prototype'],
      date: 'November 2025',
    },
    {
      id: 2,
      title: 'Flutter Dieren App',
      path: '/projects/flutter-animal-ar-game',
      summary: 'Voor het vak Augmented Reality and Mobile App Development ontwikkelde ik samen met Ewoud een interactieve dierenapp met AR-functionaliteit.',
      image: 'images/projects/DierenApp-cover-image.png',
      tags: ['Flutter', 'AR', 'Dart', 'Unity', 'Vuforia'],
      date: 'December 2024',
    },
    {
      id: 3,
      title: 'MAUI Smart Waste Sorting App',
      path: '/projects/maui-waste-sorting-app',
      summary: 'Een app die gebruikmaakt van Azure Computer Vision om gebruikers te helpen hun afval correct te sorteren.',
      image: 'images/projects/MAUI-cover-image.png',
      tags: ['Azure AI', '.NET MAUI', 'Mobile'],
      date: 'Oktober 2024',
    },
  ];
}
