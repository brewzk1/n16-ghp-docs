import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Page2Component } from '../page2/page2.component';

@Component({
    selector: 'app-header',
    standalone: true,
    // imports: [CommonModule, RouterModule, HeaderComponent, Page2Component],
    imports: [CommonModule, RouterModule],
    template: `
    <p>
      <a routerLink="/home">Home</a> |<a routerLink="/page2">Page 2</a>  
    </p>
  `,
    styles: [
    ]
})
export class HeaderComponent {

}
