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
  selector: 'app-maui-waste-sorting-app-page',
  imports: [RouterLink, MatIconModule],
  templateUrl: './maui-waste-sorting-app-page.html',
  styleUrl: './maui-waste-sorting-app-page.css',
})
export class MauiWasteSortingAppPage {
  title: string = 'MAUI Smart Waste Sorting App';

  heroImage: string = 'images/projects/MAUI-cover-image.png';

  gallery: string[] = [
    'images/projects/maui-app-gallerij/screenshot_challange_wout.PNG',
  ];

  tools: Tools[] = [
    { name: '.NET MAUI', type: 'Framework' },
    { name: 'C#', type: 'Programmeertaal' },
    { name: 'ASP.NET Core', type: 'Framework / API' },
    { name: 'Azure AI Custom Vision', type: 'Technologie / AI-platform' },
    { name: 'Visual Studio', type: 'IDE / Editor' },
  ];

  linksAndResources: LinksAndResources[] = [
    { name: 'Wout Van Ael - App Idea waste sorting.pdf', icon: 'description', path: 'assets/maui-app/Wout Van Ael - App Idea waste sorting.pdf', },
    { name: 'Kopie van de codebase', icon: 'folder_zip', path: 'assets/maui-app/smart-waste-sorting-app.zip' },
  ];
}
