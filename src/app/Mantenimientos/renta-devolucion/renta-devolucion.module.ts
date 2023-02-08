import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditRentaDevolucionComponent } from './edit-renta-devolucion/edit-renta-devolucion.component';
import { AddRentaDevolucionComponent } from './add-renta-devolucion/add-renta-devolucion.component';
import { RentaDevolucionComponent } from './renta-devolucion.component';
import { RentaDevolucionRoutingModule } from './renta-devolucion-routing.module';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';



@NgModule({
  declarations: [
    EditRentaDevolucionComponent,
    AddRentaDevolucionComponent,
    RentaDevolucionComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RentaDevolucionRoutingModule
  ]
})
export class RentaDevolucionModule { }
