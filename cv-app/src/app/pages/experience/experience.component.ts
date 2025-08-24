import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-experience',
  imports: [CommonModule, TranslatePipe],
  template: `
    <div class="container mt-5">
      <h2 class="text-center mb-4">{{ 'EXPERIENCE.TITLE' | translate }}</h2>
      <div *ngFor="let item of ('EXPERIENCE.ITEMS' | translate)" class="card">
        <div class="card-body">
          <h5 class="card-title">{{ item.ROLE }} - {{ item.COMPANY }}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{ item.PERIOD }}</h6>
          <p class="card-text">{{ item.DESCRIPTION }}</p>
        </div>
      </div>
    </div>
  `
})
export class ExperienceComponent {
}
