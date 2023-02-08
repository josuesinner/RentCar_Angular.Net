import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InspeccionComponent } from './inspeccion.component';
import { RouterModule, Routes } from '@angular/router';
import { AddInspeccionComponent } from './add-inspeccion/add-inspeccion.component';
import { EditInspeccionComponent } from './edit-inspeccion/edit-inspeccion.component';

const routes:Routes = [
  {
    path:'',
    component:InspeccionComponent
  },
  {
    path:'add',
    component:AddInspeccionComponent
  },
  {
    path:'edit/:id',
    component:EditInspeccionComponent
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
export class InspeccionRoutingModule { }
