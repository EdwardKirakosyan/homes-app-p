import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
  <main>
    <header class="brand-name">
      <img src="/assets/logo.svg" alt="logo">
    </header>
    <section class="content"></section>
    <router-outlet></router-outlet>
  </main>
  `,
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent, RouterModule]
})
export class AppComponent {
  title = 'homes';
}
