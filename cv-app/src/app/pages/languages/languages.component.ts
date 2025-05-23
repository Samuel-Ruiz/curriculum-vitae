import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-languages',
  imports: [CommonModule, TranslateModule],
  template: `
    <div class="container mt-5">
      <h2>{{ 'LANGUAGES.TITLE' | translate }}</h2>
      <ul class="list-group">
        <li class="list-group-item" *ngFor="let lang of ('LANGUAGES.ITEMS' | translate)">
          <strong>{{ lang.LANGUAGE }}</strong>: {{ lang.LEVEL }}
        </li>
      </ul>
    </div>
  `,
  styles: [`
    .container {
      max-width: 600px;
      margin: auto;
    }

    h2 {
      margin-bottom: 1rem;
      font-weight: 600;
    }

    .list-group-item {
      font-size: 1rem;
      padding: 0.75rem 1.25rem;
    }
  `]
})
export class LanguagesComponent {

}
