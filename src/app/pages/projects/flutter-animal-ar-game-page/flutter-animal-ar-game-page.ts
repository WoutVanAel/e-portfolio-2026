import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

interface Tools {
  name: string;
  type: string;
}

interface LinksAndResources {
  name: string;
  icon: string;
  path: string;
}

@Component({
  selector: 'app-flutter-animal-ar-game-page',
  imports: [RouterLink, MatIconModule],
  templateUrl: './flutter-animal-ar-game-page.html',
  styleUrl: './flutter-animal-ar-game-page.css',
})
export class FlutterAnimalArGamePage {
  title: string = 'Flutter Dieren App';

  heroImage: string = 'images/projects/DierenApp-cover-image.png';

  gallery: string[] = [
    'images/projects/dieren-app-gallerij/DierenApp-unity-startup.png',
    'images/projects/dieren-app-gallerij/DierenApp-scan-animal-without-login.png',
    'images/projects/dieren-app-gallerij/DierenApp-login.png',
    'images/projects/dieren-app-gallerij/DierenApp-account-page.png',
    'images/projects/dieren-app-gallerij/DierenApp-unlocked-animals.png',
    'images/projects/dieren-app-gallerij/DierenApp-scoreboard.png',
    'images/projects/dieren-app-gallerij/DierenApp-signup.png',
    'images/projects/dieren-app-gallerij/DierenApp-signup-validation.png',
    'images/projects/dieren-app-gallerij/DierenApp-scan-new-animal.png',
  ];

  demoVideoPath: string = 'videos/DierenAppDemoZonderCommentary.mp4';

  tools: Tools[] = [
    { name: 'Flutter', type: 'Framework' },
    { name: 'Dart', type: 'Programmeertaal' },
    { name: 'Unity', type: 'Engine / Framework' },
    { name: 'Vuforia', type: 'Framework / AR-platform' },
    { name: 'Augmented Reality (AR)', type: 'Technologie' },
    { name: 'Visual Studio Code', type: 'IDE / Editor' },
    { name: 'Git', type: 'Versiebeheersysteem' },
  ];

  linksAndResources: LinksAndResources[] = [
    { name: 'Project Voorstel en Teamgenoten.pdf', icon: 'description', path: 'assets/dieren-app/Project Voorstel en Teamgenoten.pdf', },
    { name: 'Kopie van de codebase op GitHub.com', icon: 'code', path: 'https://github.com/WoutVanAel/Flutter-DierenApp' },
  ];
}