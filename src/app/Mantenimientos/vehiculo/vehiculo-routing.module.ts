import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VehiculoComponent } from './vehiculo.component';
import { AddVehiculoComponent } from './add-vehiculo/add-vehiculo.component';
import { EditVehiculoComponent } from './edit-vehiculo/edit-vehiculo.component';

const routes:Routes = [
  {
    path:'',
    component:VehiculoComponent
  },
  {
    path:'add',
    component:AddVehiculoComponent
  },
  {
    path:'edit/:id',
    component:EditVehiculoComponent
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
export class VehiculoRoutingModule { }
