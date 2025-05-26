import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  imports: [CommonModule, TranslateModule],
  template: `
    <div class="container mt-5">
      <h2>{{ 'SKILLS.TITLE' | translate }}</h2>
      <h5>{{ 'SKILLS.PROGRAMMING_LANGUAGES_TITLE' | translate }}</h5>
      <ul>
        <li *ngFor="let skill of skills">
          {{ getTranslatedSkill(skill) }}
        </li>
      </ul>
      <h5>{{ 'SKILLS.TECHNOLOGIES_TITLE' | translate }}</h5>
      <ul>
        <li *ngFor="let tech of ('SKILLS.TECHNOLOGIES_VALUES' | translate)">{{ tech }}</li>
      </ul>
      <h5>{{ 'SKILLS.METHODOLOGIES_TITLE' | translate }}</h5>
      <ul>
        <li *ngFor="let method of ('SKILLS.METHODOLOGIES_VALUES' | translate)">{{ method }}</li>
      </ul>
    </div>
  `
})
export class SkillsComponent {
  skills: Skill[] = [
    { name: 'Java', startDate: '2017-05-01' },
    { name: 'Angular', startDate: '2018-05-01' },
    { name: 'TypeScript', startDate: '2018-05-01' },
    { name: 'JavaScript', startDate: '2018-05-01' },
    { name: 'Python', totalExperience: 1 }
  ];

  constructor(private translate: TranslateService) {}

  /**
   * Returns the translated skill with the number of years of experience.
   * @param skill
   */
  getTranslatedSkill(skill: Skill): string {
    const years = this.getExperienceYears(skill.startDate) ?? this.getNumberOfYearsSince(skill.totalExperience);
    return this.translate.instant('SKILLS.PROGRAMMING_LANGUAGES_VALUES', { skill: skill.name, years });
  }

  /**
   * Calculates the number of years of experience based on the start date.
   * @param startDate
   */
  getExperienceYears(startDate?: string): string | undefined {
    if (!startDate) {
      return undefined;
    }
    const start = new Date(startDate);
    const now = new Date();
    let years = now.getFullYear() - start.getFullYear();
    const m = now.getMonth() - start.getMonth();
    if (m < 0 || (m === 0 && now.getDate() < start.getDate())) {
      years--;
    }
    return this.getNumberOfYearsSince(years);
  }

  /**
   * Returns a string indicating the number of years since a given number.
   * @param years
   */
  getNumberOfYearsSince(years: number = 0): string {
    return years > 0 ? `${years} year${years > 1 ? 's' : ''}` : 'Less than a year';
  }
}

interface Skill {
  name: string;
  startDate?: string;
  totalExperience?: number;
}
