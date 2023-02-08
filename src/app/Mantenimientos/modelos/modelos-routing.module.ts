import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ModelosComponent } from './modelos.component';
import { AddModeloComponent } from './add-modelo/add-modelo.component';
import { EditModeloComponent } from './edit-modelo/edit-modelo.component';

const routes:Routes = [
  {
    path:'',
    component:ModelosComponent
  },
  {
    path:'add',
    component:AddModeloComponent
  },
  {
    path:'edit/:id',
    component:EditModeloComponent
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
export class ModelosRoutingModule { }
