import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Page2Component } from './page2/page2.component';
import { HeaderComponent } from './header/header.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, HeaderComponent, HomeComponent, Page2Component],
    template: `
    <app-header />
    <router-outlet></router-outlet>
  `,
    styles: [],
})
export class AppComponent {
    title = 'n16-ghp-docs';
}
