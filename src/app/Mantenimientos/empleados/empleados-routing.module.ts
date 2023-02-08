import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadosComponent } from './empleados.component';
import { AddEmpleadoComponent } from './add-empleado/add-empleado.component';
import { EditEmpleadoComponent } from './edit-empleado/edit-empleado.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {
    path:'',
    component:EmpleadosComponent
  },
  {
    path:'add',
    component:AddEmpleadoComponent
  },
  {
    path:'edit/:id',
    component:EditEmpleadoComponent
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
export class EmpleadosRoutingModule { }
