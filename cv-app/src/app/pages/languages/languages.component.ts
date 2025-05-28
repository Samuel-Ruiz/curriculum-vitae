import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  template: `
    <div class="container mt-5">
      <h2 class="mb-4">{{ 'LANGUAGES.TITLE' | translate }}</h2>
      <ul class="list-group">
        <li
          class="list-group-item d-flex justify-content-between align-items-center"
          *ngFor="let lang of ('LANGUAGES.ITEMS' | translate)">
          <span>{{ lang.LANGUAGE }}</span>
          <span class="badge bg-primary rounded-pill">{{ lang.LEVEL }}</span>
        </li>
      </ul>
    </div>
  `
})
export class LanguagesComponent {}
