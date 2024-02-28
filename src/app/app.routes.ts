import { Routes } from '@angular/router';
import {MenuLoginComponent} from "./pages/menu-login/menu-login.component";
import {MenuInicioComponent} from "./pages/menu-inicio/menu-inicio.component";

export const routes: Routes = [
  {'path': '', component:MenuLoginComponent},
  {'path': 'menu-inicio',component:MenuInicioComponent}
];
