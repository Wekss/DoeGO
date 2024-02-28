import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {MenuInicioComponent} from "../menu-inicio/menu-inicio.component";

@Component({
  selector: 'app-menu-login',
  standalone: true,
  imports: [
    RouterLink, MenuInicioComponent
  ],
  templateUrl: './menu-login.component.html',
  styleUrl: './menu-login.component.css'
})
export class MenuLoginComponent {

}
