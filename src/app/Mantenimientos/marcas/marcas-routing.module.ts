import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MarcasComponent } from './marcas.component';
import { AddMarcaComponent } from './add-marca/add-marca.component';
import { EditMarcaComponent } from './edit-marca/edit-marca.component';

const routes:Routes = [
  {
    path:'',
    component:MarcasComponent
  },
  {
    path:'add',
    component:AddMarcaComponent
  },
  {
    path:'edit/:id',
    component:EditMarcaComponent
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
export class MarcasRoutingModule { }
