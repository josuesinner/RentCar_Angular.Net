import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditInspeccionComponent } from './edit-inspeccion/edit-inspeccion.component';
import { AddInspeccionComponent } from './add-inspeccion/add-inspeccion.component';
import { InspeccionComponent } from './inspeccion.component';
import { InspeccionRoutingModule } from './inspeccion-routing.module';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';



@NgModule({
  declarations: [
    EditInspeccionComponent,
    AddInspeccionComponent,
    InspeccionComponent
  ],
  imports: [
    CommonModule,
    InspeccionRoutingModule,
    AngularMaterialModule
  ]
})
export class InspeccionModule { }
