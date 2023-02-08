import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipovehiculoRoutingModule } from './tipovehiculo-routing.module';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { TipovehiculosComponent } from './tipovehiculos.component';
import { AddTipovehiculoComponent } from './add-tipovehiculo/add-tipovehiculo.component';
import { EditTipovehiculoComponent } from './edit-tipovehiculo/edit-tipovehiculo.component';



@NgModule({
  declarations: [
    TipovehiculosComponent,
    AddTipovehiculoComponent,
    EditTipovehiculoComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    TipovehiculoRoutingModule
  ]
})
export class TipovehiculoModule { }
