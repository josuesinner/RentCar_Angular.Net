import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MantenimientosRoutingModule } from './mantenimientos-routing.module';
import { ClientesComponent } from './clientes/clientes.component';
import { CombustiblesComponent } from './combustibles/combustibles.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { MarcasComponent } from './marcas/marcas.component';
import { ModelosComponent } from './modelos/modelos.component';
import { RentaDevolucionComponent } from './renta-devolucion/renta-devolucion.component';
import { VehiculoComponent } from './vehiculo/vehiculo.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { InspeccionComponent } from './inspeccion/inspeccion.component';
import { TipovehiculosComponent } from './tipovehiculos/tipovehiculos.component';
import { VistaEditarComponent } from './vista-editar/vista-editar.component';
import { AddEmpleadoComponent } from './empleados/add-empleado/add-empleado.component';
import { EditEmpleadoComponent } from './empleados/edit-empleado/edit-empleado.component';
import { AddModeloComponent } from './modelos/add-modelo/add-modelo.component';
import { EditModeloComponent } from './modelos/edit-modelo/edit-modelo.component';
import { AddTipovehiculoComponent } from './tipovehiculos/add-tipovehiculo/add-tipovehiculo.component';
import { EditTipovehiculoComponent } from './tipovehiculos/edit-tipovehiculo/edit-tipovehiculo.component';



@NgModule({
  declarations: [
    ClientesComponent,
    VistaEditarComponent
    //EmpleadosComponent,
    //CombustiblesComponent,
    //MarcasComponent,
    //ModelosComponent,
    //VehiculoComponent,
    //RentaDevolucionComponent,
    //InspeccionComponent,
    //TipovehiculosComponent,
    
    //AddEmpleadoComponent,
    //EditEmpleadoComponent,
    //AddModeloComponent,
    //EditModeloComponent,
    //AddTipovehiculoComponent,
    //EditTipovehiculoComponent,
  ],
  imports: [
    CommonModule,
    MantenimientosRoutingModule,
    AngularMaterialModule
  ]
})
export class MantenimientosModule { }
