import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Principal/home/home.component';
import { PageNotFoundComponent } from './Principal/page-not-found/page-not-found.component';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./Principal/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'home',
    component: HomeComponent,
    loadChildren: () => import('./Mantenimientos/mantenimientos.module').then(m => m.MantenimientosModule)
  },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
