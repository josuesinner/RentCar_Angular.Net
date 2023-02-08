import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CombustiblesComponent } from './combustibles.component';
import { AddCombustibleComponent } from './add-combustible/add-combustible.component';
import { EditCombustibleComponent } from './edit-combustible/edit-combustible.component';

const routes:Routes = [
  {
    path:'',
    component:CombustiblesComponent
  },
  {
    path:'add',
    component:AddCombustibleComponent
  },
  {
    path:'edit/:id',
    component:EditCombustibleComponent
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
export class CombustiblesRoutingModule { }
