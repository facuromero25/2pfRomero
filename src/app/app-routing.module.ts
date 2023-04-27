import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlumnosComponent } from './dashboard/pages/alumnos/alumnos.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { AlumnoDetalleComponent } from './dashboard/pages/alumnos/pages/alumno-detalle/alumno-detalle.component';
import { CursosComponent } from './dashboard/pages/cursos/cursos.component';
import { AbmInscripcionesComponent } from './dashboard/pages/inscripciones/abm-inscripciones/abm-inscripciones.component';

const routes: Routes = [

  {

    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {

        path: 'estudiantes',
        children: [
          {

            path: '',
            component: AlumnosComponent,
          },
          {

            path: ':id',
            component: AlumnoDetalleComponent
          }

        ]
      },
      {
        path: 'cursos',
        component: CursosComponent,
      },
      {
        path: 'abm-inscripciones',
        component: AbmInscripcionesComponent
      }

    ]
  },

  // AUTH
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
    ]
  },

  // RUTAS INDEFINIDAS....
  {
    // CUALQUIER RUTA
    path: '**',
    redirectTo: 'dashboard',
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
