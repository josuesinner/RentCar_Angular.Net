import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadosComponent } from './empleados.component';
import { AddEmpleadoComponent } from './add-empleado/add-empleado.component';
import { EditEmpleadoComponent } from './edit-empleado/edit-empleado.component';
import { EmpleadosRoutingModule } from './empleados-routing.module';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';



@NgModule({
  declarations: [
    EmpleadosComponent,
    AddEmpleadoComponent,
    EditEmpleadoComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    EmpleadosRoutingModule
  ]
})
export class EmpleadosModule { }
