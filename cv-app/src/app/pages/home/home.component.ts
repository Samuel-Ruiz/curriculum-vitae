import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  imports: [
    TranslatePipe
  ],
  template: `
    <div class="container text-center mt-5">
      <h1>{{ 'HOME.TITLE' | translate }}</h1>
      <p><i class="fas fa-birthday-cake"></i> {{ 'HOME.BIRTH' | translate }}</p>
      <p><i class="fas fa-map-marker-alt"></i> {{ 'HOME.ADDRESS' | translate }}</p>
      <p><i class="fas fa-envelope"></i> {{ 'HOME.EMAIL' | translate }}</p>
    </div>
  `
})
export class HomeComponent {

}
