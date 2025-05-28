import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, TranslatePipe],
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" routerLink="/">Curriculum Vitae</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent"
                aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">{{ 'NAV.HOME' | translate }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/experience" routerLinkActive="active">{{ 'NAV.EXPERIENCE' | translate }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/education" routerLinkActive="active">{{ 'NAV.EDUCATION' | translate }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/skills" routerLinkActive="active">{{ 'NAV.SKILLS' | translate }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/languages" routerLinkActive="active">{{ 'NAV.LANGUAGES' | translate }}</a>
            </li>
          </ul>
          <div class="d-flex">
            <button class="btn btn-secondary me-2" type="button" (click)="downloadPDF()">
              <i class="fas fa-file-pdf"></i>
            </button>
            <button class="btn btn-outline-light" type="button" (click)="switchLanguage()">
              <i class="fas fa-globe"></i> {{ currentLang.toUpperCase() }}
            </button>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: []
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
