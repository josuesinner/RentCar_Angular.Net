import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMarcaComponent } from './add-marca/add-marca.component';
import { EditMarcaComponent } from './edit-marca/edit-marca.component';
import { MarcasComponent } from './marcas.component';
import { MarcasRoutingModule } from './marcas-routing.module';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';



@NgModule({
  declarations: [
    MarcasComponent,
    AddMarcaComponent,
    EditMarcaComponent
  ],
  imports: [
    CommonModule,
    MarcasRoutingModule,
    AngularMaterialModule
  ]
})
export class MarcasModule { }
