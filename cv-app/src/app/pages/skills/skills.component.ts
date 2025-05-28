import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  template: `
    <div class="container mt-5">
      <h2>{{ 'SKILLS.TITLE' | translate }}</h2>
      <div *ngFor="let categoryKey of getCategories()" class="mt-4">
        <h5>{{ categoryKey | translate }}</h5>
        <ul class="list-group">
          <li *ngFor="let skill of getSkillsByCategory(categoryKey)" class="list-group-item d-flex justify-content-between align-items-center">
            {{ skill.nameKey | translate }}
            <span *ngIf="getExperienceYears(skill)" class="badge bg-primary rounded-pill">
              {{ getExperienceYears(skill) }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  `
})
export class SkillsComponent {
  skills: Skill[] = [
    // Lenguajes de Programación
    { nameKey: 'SKILLS.PROGRAMMING_LANGUAGES.JAVA', categoryKey: 'SKILLS.CATEGORIES.PROGRAMMING_LANGUAGES', startDate: '2017-05-01' },
    { nameKey: 'SKILLS.PROGRAMMING_LANGUAGES.TYPESCRIPT', categoryKey: 'SKILLS.CATEGORIES.PROGRAMMING_LANGUAGES', startDate: '2018-05-01' },
    { nameKey: 'SKILLS.PROGRAMMING_LANGUAGES.JAVASCRIPT', categoryKey: 'SKILLS.CATEGORIES.PROGRAMMING_LANGUAGES', startDate: '2018-05-01' },
    { nameKey: 'SKILLS.PROGRAMMING_LANGUAGES.PYTHON', categoryKey: 'SKILLS.CATEGORIES.PROGRAMMING_LANGUAGES', totalExperience: 1 },

    // Frameworks y Librerías
    { nameKey: 'SKILLS.FRAMEWORKS.ANGULAR', categoryKey: 'SKILLS.CATEGORIES.FRAMEWORKS', startDate: '2017-05-01' },
    { nameKey: 'SKILLS.FRAMEWORKS.RXJS', categoryKey: 'SKILLS.CATEGORIES.FRAMEWORKS' },
    { nameKey: 'SKILLS.FRAMEWORKS.ANGULAR_CLI', categoryKey: 'SKILLS.CATEGORIES.FRAMEWORKS' },
    { nameKey: 'SKILLS.FRAMEWORKS.BOOTSTRAP', categoryKey: 'SKILLS.CATEGORIES.FRAMEWORKS' },
    { nameKey: 'SKILLS.FRAMEWORKS.JASMINE_KARMA', categoryKey: 'SKILLS.CATEGORIES.FRAMEWORKS' },

    // Herramientas y Tecnologías
    { nameKey: 'SKILLS.TOOLS.GIT', categoryKey: 'SKILLS.CATEGORIES.TOOLS' },
    { nameKey: 'SKILLS.TOOLS.NPM', categoryKey: 'SKILLS.CATEGORIES.TOOLS' },
    { nameKey: 'SKILLS.TOOLS.JENKINS', categoryKey: 'SKILLS.CATEGORIES.TOOLS' },
    { nameKey: 'SKILLS.TOOLS.DOCKER', categoryKey: 'SKILLS.CATEGORIES.TOOLS' },
    { nameKey: 'SKILLS.TOOLS.MONGODB', categoryKey: 'SKILLS.CATEGORIES.TOOLS' },
    { nameKey: 'SKILLS.TOOLS.SQL', categoryKey: 'SKILLS.CATEGORIES.TOOLS' },
    { nameKey: 'SKILLS.TOOLS.REST_SOAP', categoryKey: 'SKILLS.CATEGORIES.TOOLS' },

    // Metodologías
    { nameKey: 'SKILLS.METHODOLOGIES.DESIGN_PATTERNS', categoryKey: 'SKILLS.CATEGORIES.METHODOLOGIES' },
    { nameKey: 'SKILLS.METHODOLOGIES.TDD', categoryKey: 'SKILLS.CATEGORIES.METHODOLOGIES' },
    { nameKey: 'SKILLS.METHODOLOGIES.TESTING', categoryKey: 'SKILLS.CATEGORIES.METHODOLOGIES' },
    { nameKey: 'SKILLS.METHODOLOGIES.AGILE', categoryKey: 'SKILLS.CATEGORIES.METHODOLOGIES' }
  ];

  getCategories(): string[] {
    return [...new Set(this.skills.map(skill => skill.categoryKey))];
  }

  getSkillsByCategory(categoryKey: string): Skill[] {
    return this.skills.filter(skill => skill.categoryKey === categoryKey);
  }

  getExperienceYears(skill: Skill): string | null {
    const years = this.calculateExperienceYears(skill.startDate) ?? skill.totalExperience;
    if (years != null) {
      return years > 0 ? `${years} año${years > 1 ? 's' : ''}` : 'Menos de un año';
    }
    return null;
  }

  private calculateExperienceYears(startDate?: string): number | null {
    if (!startDate) {
      return null;
    }
    const start = new Date(startDate);
    const now = new Date();
    let years = now.getFullYear() - start.getFullYear();
    const m = now.getMonth() - start.getMonth();
    if (m < 0 || (m === 0 && now.getDate() < start.getDate())) {
      years--;
    }
    return years;
  }
}

interface Skill {
  nameKey: string;
  categoryKey: string;
  startDate?: string;
  totalExperience?: number;
}
