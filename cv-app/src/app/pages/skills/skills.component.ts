import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  imports: [CommonModule, TranslateModule],
  template: `
    <div class="container mt-5">
      <h2>{{ 'SKILLS.TITLE' | translate }}</h2>
      <h5>Programming Languages</h5>
      <ul>
        <li *ngFor="let lang of ('SKILLS.PROGRAMMING_LANGUAGES' | translate)">{{ lang }}</li>
      </ul>
      <h5>Technologies</h5>
      <ul>
        <li *ngFor="let tech of ('SKILLS.TECHNOLOGIES' | translate)">{{ tech }}</li>
      </ul>
      <h5>Methodologies</h5>
      <ul>
        <li *ngFor="let method of ('SKILLS.METHODOLOGIES' | translate)">{{ method }}</li>
      </ul>
    </div>
  `
})
export class SkillsComponent {
}
