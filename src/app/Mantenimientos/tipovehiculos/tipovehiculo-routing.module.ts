import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipovehiculosComponent } from './tipovehiculos.component';
import { RouterModule, Routes } from '@angular/router';
import { AddTipovehiculoComponent } from './add-tipovehiculo/add-tipovehiculo.component';
import { EditTipovehiculoComponent } from './edit-tipovehiculo/edit-tipovehiculo.component';

const routes:Routes = [
  {
    path:'',
    component:TipovehiculosComponent
  },
  {
    path:'add',
    component:AddTipovehiculoComponent
  },
  {
    path:'edit/:id',
    component:EditTipovehiculoComponent
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
export class TipovehiculoRoutingModule { }
