import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditCombustibleComponent } from './edit-combustible/edit-combustible.component';
import { AddCombustibleComponent } from './add-combustible/add-combustible.component';
import { CombustiblesComponent } from './combustibles.component';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { CombustiblesRoutingModule } from './combustibles-routing.module';



@NgModule({
  declarations: [
    EditCombustibleComponent,
    AddCombustibleComponent,
    CombustiblesComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    CombustiblesRoutingModule
  ]
})
export class CombustiblesModule { }
