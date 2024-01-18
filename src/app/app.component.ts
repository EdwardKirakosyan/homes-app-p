import { Component } from '@angular/core';
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
    <app-home></app-home>
  </main>
  `,
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent]
})
export class AppComponent {
  title = 'homes';
}
