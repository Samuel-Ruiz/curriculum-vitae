import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, TranslateModule],
  template: `
    <nav class="navbar">
      <div class="navbar-left">
        <a routerLink="/" class="navbar-logo">Curriculum Vitae</a>
        <ul class="navbar-links">
          <li>
            <a routerLink="/" routerLinkActive="active">{{ 'NAV.HOME' | translate }}</a>
          </li>
          <li>
            <a routerLink="/experience" routerLinkActive="active">{{ 'NAV.EXPERIENCE' | translate }}</a>
          </li>
          <li>
            <a routerLink="/education" routerLinkActive="active">{{ 'NAV.EDUCATION' | translate }}</a>
          </li>
          <li>
            <a routerLink="/skills" routerLinkActive="active">{{ 'NAV.SKILLS' | translate }}</a>
          </li>
          <li>
            <a routerLink="/languages" routerLinkActive="active">{{ 'NAV.LANGUAGES' | translate }}</a>
          </li>
        </ul>
      </div>
      <div class="navbar-right">
        <button class="download-btn" (click)="downloadPDF()">
          <i class="fas fa-file-pdf"></i>
        </button>
        <button (click)="switchLanguage()" class="lang-switch">
          <i class="fas fa-globe"></i> {{ currentLang.toUpperCase() }}
        </button>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      background-color: #ffffff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .navbar-left {
      display: flex;
      align-items: center;
    }
    .navbar-logo {
      font-size: 1.5rem;
      font-weight: bold;
      color: #333333;
      text-decoration: none;
      margin-right: 2rem;
    }
    .navbar-links {
      list-style: none;
      display: flex;
      gap: 1.5rem;
      margin: 0;
      padding: 0;
    }
    .navbar-links li a {
      text-decoration: none;
      color: #555555;
      font-weight: 500;
      transition: color 0.3s ease;
    }
    .navbar-links li a:hover,
    .navbar-links li a.active {
      color: #000000;
    }
    .navbar-right {
      display: flex;
      align-items: center;
    }
    .lang-switch {
      background: none;
      border: none;
      font-size: 1rem;
      cursor: pointer;
      color: #555555;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .lang-switch:hover {
      color: #000000;
    }
    .download-btn {
      background-color: #e63946;
      color: #ffffff;
      border: none;
      padding: 10px 20px;
      font-size: 1rem;
      font-weight: 600;
      border-radius: 5px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      transition: background-color 0.3s ease;
    }
    .download-btn i {
      font-size: 1.2rem;
    }
    .download-btn:hover {
      background-color: #d62828;
    }
  `]
})
export class HeaderComponent {
  currentLang = this.translate.currentLang || 'es';

  constructor(private translate: TranslateService) {}

  switchLanguage() {
    this.currentLang = this.currentLang === 'es' ? 'en' : 'es';
    this.translate.use(this.currentLang);
  }

  downloadPDF() {
    const link = document.createElement('a');
    link.href = `assets/cv/${this.currentLang}.pdf`;
    link.download = `Samuel_Ruiz_${this.currentLang}_CV.pdf`;
    link.click();
  }
}
