import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditVehiculoComponent } from './edit-vehiculo/edit-vehiculo.component';
import { AddVehiculoComponent } from './add-vehiculo/add-vehiculo.component';
import { VehiculoRoutingModule } from './vehiculo-routing.module';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { VehiculoComponent } from './vehiculo.component';



@NgModule({
  declarations: [
    EditVehiculoComponent,
    AddVehiculoComponent,
    VehiculoComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    VehiculoRoutingModule
  ]
})
export class VehiculoModule { }
