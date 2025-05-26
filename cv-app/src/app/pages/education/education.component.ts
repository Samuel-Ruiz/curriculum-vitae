import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-education',
  imports: [CommonModule, TranslateModule],
  template: `
    <div class="container mt-5">
      <h2>{{ 'EDUCATION.TITLE' | translate }}</h2>
      <div *ngFor="let item of ('EDUCATION.ITEMS' | translate)">
        <h5>{{ item.DEGREE }}</h5>
        <p>{{ item.INSTITUTION }}</p>
        <p>{{ item.SPECIALIZATION }}</p>
        <hr>
      </div>
    </div>
  `
})
export class EducationComponent {
}
