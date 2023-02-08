import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatToolbarModule} from '@angular/material/toolbar';
import{MatSidenavModule} from '@angular/material/sidenav';
import{MatIconModule} from '@angular/material/icon';
import{MatListModule} from '@angular/material/list';
import{MatButtonModule} from '@angular/material/button';
import { ClientesComponent } from './Mantenimientos/clientes/clientes.component';
import { EmpleadosComponent } from './Mantenimientos/empleados/empleados.component';
import { CombustiblesComponent } from './Mantenimientos/combustibles/combustibles.component';
import { MarcasComponent } from './Mantenimientos/marcas/marcas.component';
import { ModelosComponent } from './Mantenimientos/modelos/modelos.component';
import { VehiculoComponent } from './Mantenimientos/vehiculo/vehiculo.component';
import { RentaDevolucionComponent } from './Mantenimientos/renta-devolucion/renta-devolucion.component';
import { HomeComponent } from './Principal/home/home.component';
import { LoginComponent } from './Principal/login/login.component';
import { PageNotFoundComponent } from './Principal/page-not-found/page-not-found.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import {DataTablesModule} from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { ClienteServicioService } from './core/services/cliente-servicio.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularMaterialModule,
    DataTablesModule,
    HttpClientModule
  ],
  providers: [ClienteServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
