import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../Principal/home/home.component';
import { ClientesComponent } from './clientes/clientes.component';
import { CombustiblesComponent } from './combustibles/combustibles.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { MarcasComponent } from './marcas/marcas.component';
import { ModelosComponent } from './modelos/modelos.component';
import { RentaDevolucionComponent } from './renta-devolucion/renta-devolucion.component';
import { VehiculoComponent } from './vehiculo/vehiculo.component';
import { InspeccionComponent } from './inspeccion/inspeccion.component';
import { TipovehiculosComponent } from './tipovehiculos/tipovehiculos.component';
import { VistaEditarComponent } from './vista-editar/vista-editar.component';
import { EditEmpleadoComponent } from './empleados/edit-empleado/edit-empleado.component';
import { EditCombustibleComponent } from './combustibles/edit-combustible/edit-combustible.component';
import { EditInspeccionComponent } from './inspeccion/edit-inspeccion/edit-inspeccion.component';
import { EditMarcaComponent } from './marcas/edit-marca/edit-marca.component';
import { EditModeloComponent } from './modelos/edit-modelo/edit-modelo.component';
import { EditRentaDevolucionComponent } from './renta-devolucion/edit-renta-devolucion/edit-renta-devolucion.component';
import { EditTipovehiculoComponent } from './tipovehiculos/edit-tipovehiculo/edit-tipovehiculo.component';
import { EditVehiculoComponent } from './vehiculo/edit-vehiculo/edit-vehiculo.component';

const routes: Routes = [
  { path: 'clientes', component: ClientesComponent },
  {
    path: 'combustibles',
    loadChildren : () => import("./combustibles/combustibles.module").then( m => m.CombustiblesModule)
  },
  {
    path: 'empleados',
    loadChildren : () => import("./empleados/empleados.module").then( m => m.EmpleadosModule)
  },
  {
    path: 'modelos',
    loadChildren : () => import("./modelos/modelos.module").then( m => m.ModelosModule)
  },
  {
    path: 'renta-devoluciones',
    loadChildren : () => import("./renta-devolucion/renta-devolucion.module").then( m => m.RentaDevolucionModule)
  },
  {
    path: 'vehiculos',
    loadChildren : () => import("./vehiculo/vehiculo.module").then( m => m.VehiculoModule)
  },
  {
    path: 'inspecciones',
    loadChildren : () => import("./inspeccion/inspeccion.module").then( m => m.InspeccionModule)
  },
  {
    path: 'tipovehiculos',
    loadChildren : () => import("./tipovehiculos/tipovehiculo.module").then( m => m.TipovehiculoModule)
  },
  {
    path: 'marcas',
    loadChildren : () => import("./marcas/marcas.module").then( m => m.MarcasModule)
  },
  { path: 'editempleado/:id', component: EditEmpleadoComponent },
  { path: 'editcombustible/:id', component: EditCombustibleComponent },
  { path: 'editinspeccion/:id', component: EditInspeccionComponent },
  { path: 'editmarca/:id', component: EditMarcaComponent },
  { path: 'editmodelo/:id', component: EditModeloComponent },
  { path: 'editrentaDevolucion/:id', component: EditRentaDevolucionComponent },
  { path: 'edittipoVehiculo/:id', component: EditTipovehiculoComponent },
  { path: 'editvehiculo/:id', component: EditVehiculoComponent },
  { path: 'vistaEdit/:id', component: VistaEditarComponent }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MantenimientosRoutingModule { }
