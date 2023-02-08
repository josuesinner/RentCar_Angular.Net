import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelosComponent } from './modelos.component';
import { AddModeloComponent } from './add-modelo/add-modelo.component';
import { EditModeloComponent } from './edit-modelo/edit-modelo.component';
import { ModelosRoutingModule } from './modelos-routing.module';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';



@NgModule({
  declarations: [
    ModelosComponent,
    AddModeloComponent,
    EditModeloComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ModelosRoutingModule
  ]
})
export class ModelosModule { }
