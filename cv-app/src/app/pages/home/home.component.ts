import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  imports: [
    TranslatePipe
  ],
  template: `
    <div class="container mt-5">
      <div class="card">
        <div class="card-header text-center">
          <h1>{{ 'HOME.TITLE' | translate }}</h1>
        </div>
        <div class="card-body text-center">
          <p><i class="fas fa-birthday-cake"></i> {{ 'HOME.BIRTH' | translate }}</p>
          <p><i class="fas fa-map-marker-alt"></i> {{ 'HOME.ADDRESS' | translate }}</p>
          <p><i class="fas fa-envelope"></i> {{ 'HOME.EMAIL' | translate }}</p>
        </div>
      </div>
    </div>
  `
})
export class HomeComponent {

}
