import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCiudadComponent } from 'src/app/components/crear-ciudad/crear-ciudad.component';
import { InicioComponent } from 'src/app/components/inicio/inicio.component';
import { LoginComponent } from 'src/app/components/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    component: InicioComponent,
  },
  {
    path: 'crear-ciudad',
    component: CrearCiudadComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
