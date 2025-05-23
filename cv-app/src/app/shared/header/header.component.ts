import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink
  ],
  template: `
    <nav>
      <a routerLink="/">Home</a>
      <a routerLink="/experience">Experience</a>
      <a routerLink="/education">Education</a>
      <a routerLink="/skills">Skills</a>
      <a routerLink="/languages">Languages</a>
    </nav>
  `,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
