import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <div class="container mt-5">
      <h2>{{ 'EXPERIENCE.TITLE' | translate }}</h2>
      <div *ngFor="let item of ('EXPERIENCE.ITEMS' | translate)">
        <h5>{{ item.ROLE }} - {{ item.COMPANY }}</h5>
        <p><strong>{{ item.PERIOD }}</strong></p>
        <p>{{ item.DESCRIPTION }}</p>
        <hr>
      </div>
    </div>
  `
})
export class ExperienceComponent {}
