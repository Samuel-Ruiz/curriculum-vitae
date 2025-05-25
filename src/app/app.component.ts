import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <app-header></app-header>
    <main class="main-content">
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    .main-content {
      min-height: 90vh;
    }
  `]
})
export class AppComponent {
  title = 'cv-app';

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'es']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    if (browserLang != null) {
      translate.use(browserLang.match(/en|es/) ? browserLang : 'en');
    }
  }
}
