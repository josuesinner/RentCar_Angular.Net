import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RentaDevolucionComponent } from './renta-devolucion.component';
import { AddRentaDevolucionComponent } from './add-renta-devolucion/add-renta-devolucion.component';
import { EditRentaDevolucionComponent } from './edit-renta-devolucion/edit-renta-devolucion.component';

const routes:Routes = [
  {
    path:'',
    component:RentaDevolucionComponent
  },
  {
    path:'add',
    component:AddRentaDevolucionComponent
  },
  {
    path:'edit/:id',
    component:EditRentaDevolucionComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class RentaDevolucionRoutingModule { }
