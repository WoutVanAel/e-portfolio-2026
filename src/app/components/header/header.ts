import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, MatIconModule, MatButtonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  mobileMenuOpen = false;
  links = [
    { path: '/', label: 'Home' },
    { path: 'about-me', label: 'Over mij' },
    { path: 'stage', label: 'Stage project' },
    { path: 'projects', label: 'Projecten' },
    { path: 'contact', label: 'Contact' },
  ];

  constructor(private router: Router) { }

  isActive(path: string): boolean {
    return this.router.url === `/${path}`;
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
