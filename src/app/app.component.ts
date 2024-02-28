import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuLoginComponent } from "./pages/menu-login/menu-login.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
  imports: [MenuLoginComponent, RouterOutlet]
})
export class AppComponent {
  title = 'DoeGO';
}
