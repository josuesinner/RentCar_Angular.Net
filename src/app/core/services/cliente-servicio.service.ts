import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { data } from 'jquery';
import { Observable } from 'rxjs';
import { cliente } from 'src/app/Models/clienteModel';
import { combustible } from 'src/app/Models/combustibleModel';
import { empleado } from 'src/app/Models/empleadoModel';
import { inspeccion } from 'src/app/Models/inspeccionModel';
import { marcas } from 'src/app/Models/marcasModel';
import { modelos } from 'src/app/Models/modelosModel';
import { rentaDevolucion } from 'src/app/Models/rentaDevolucionModel';
import { tipoVehiculo } from 'src/app/Models/tipoVehiculoModel';
import { vehiculo } from 'src/app/Models/vehiculoModel';

@Injectable({
  providedIn: 'root'
})
export class ClienteServicioService {

  readonly APIurl = "https://localhost:7092/api";

  constructor(private http: HttpClient) { }

  //gestion cliente
  getClienteList():Observable<any[]>{
return this.http.get<any>(this.APIurl + '/cliente');
  }
  getClienteById(id:number):Observable<cliente>{
    return this.http.get<cliente>(this.APIurl + `/cliente/${id}`);
   }

  addCliente(data:any){
    return this.http.post(this.APIurl + '/cliente', data);
  }
  updateCliente(id:number|string,data:any){
    return this.http.put(this.APIurl + `/cliente/${id}`,data);
  }
  deleteCliente(id:number|string){
    return this.http.delete(this.APIurl + `/cliente/${id}`);
  }

  //gestion marcas
  getMarcaList():Observable<any[]>{
    return this.http.get<any>(this.APIurl + '/marca');
      }
      getMarcaById(id:number):Observable<marcas>{
        return this.http.get<marcas>(this.APIurl + `/marca/${id}`);
       }
    
      addMarca(data:any){
        return this.http.post(this.APIurl + '/marca', data);
      }
      updateMarca(id:number|string,data:any){
        return this.http.put(this.APIurl + `/marca/${id}`,data);
      }
      deleteMarca(id:number|string){
        return this.http.delete(this.APIurl + `/marca/${id}`);
      }

      //gestion modelos
  getModeloList():Observable<any[]>{
    return this.http.get<any>(this.APIurl + '/modelo');
      }
      getModeloById(id:number):Observable<modelos>{
        return this.http.get<modelos>(this.APIurl + `/modelo/${id}`);
       }
    
      addModelo(data:any){
        return this.http.post(this.APIurl + '/modelo', data);
      }
      updateModelo(id:number|string,data:any){
        return this.http.put(this.APIurl + `/modelo/${id}`,data);
      }
      deleteModelo(id:number|string){
        return this.http.delete(this.APIurl + `/modelo/${id}`);
      }

      //gestion rentaDevolucion
  getRentaDevolucionList():Observable<any[]>{
    return this.http.get<any>(this.APIurl + '/renta_devolucion');
      }
      getRentaDevolucionById(id:number):Observable<rentaDevolucion>{
        return this.http.get<rentaDevolucion>(this.APIurl + `/renta_devolucion/${id}`);
       }
    
      addRentaDevolucion(data:any){
        return this.http.post(this.APIurl + '/renta_devolucion', data);
      }
      updateRentaDevolucion(id:number|string,data:any){
        return this.http.put(this.APIurl + `/renta_devolucion/${id}`,data);
      }
      deleteRentaDevolucion(id:number|string){
        return this.http.delete(this.APIurl + `/renta_devolucion/${id}`);
      }

         //gestion Inspeccion
  getInspeccionList():Observable<any[]>{
    return this.http.get<any>(this.APIurl + '/inspeccion');
      }
      getInspeccionById(id:number):Observable<inspeccion>{
        return this.http.get<inspeccion>(this.APIurl + `/inspeccion/${id}`);
       }
    
      addInspeccion(data:any){
        return this.http.post(this.APIurl + '/inspeccion', data);
      }
      updateInspeccion(id:number|string,data:any){
        return this.http.put(this.APIurl + `/inspeccion/${id}`,data);
      }
      deleteInspeccion(id:number|string){
        return this.http.delete(this.APIurl + `/inspeccion/${id}`);
      }

      //gestion Vehiculo
  getVehiculoList():Observable<any[]>{
    return this.http.get<any>(this.APIurl + '/vehiculo');
      }
      getVehiculoById(id:number):Observable<vehiculo>{
        return this.http.get<vehiculo>(this.APIurl + `/vehiculo/${id}`);
       }
    
      addVehiculo(data:any){
        return this.http.post(this.APIurl + '/vehiculo', data);
      }
      updateVehiculo(id:number|string,data:any){
        return this.http.put(this.APIurl + `/vehiculo/${id}`,data);
      }
      deleteVehiculo(id:number|string){
        return this.http.delete(this.APIurl + `/vehiculo/${id}`);
      }

      //gestion Empleado
  getEmpleadoList():Observable<any[]>{
    return this.http.get<any>(this.APIurl + '/empleado');
      }
      getEmpleadoById(id:number):Observable<empleado>{
        return this.http.get<empleado>(this.APIurl + `/empleado/${id}`);
       }
    
      addEmpleado(data:any){
        return this.http.post(this.APIurl + '/empleado', data);
      }
      updateEmpleado(id:number|string,data:any){
        return this.http.put(this.APIurl + `/empleado/${id}`,data);
      }
      deleteEmpleado(id:number|string){
        return this.http.delete(this.APIurl + `/empleado/${id}`);
      }

      //gestion Combustible
  getCombustibleList():Observable<any[]>{
    return this.http.get<any>(this.APIurl + '/combustible');
      }
      getCombustibleById(id:number):Observable<combustible>{
        return this.http.get<combustible>(this.APIurl + `/combustible/${id}`);
       }
    
      addCombustible(data:any){
        return this.http.post(this.APIurl + '/combustible', data);
      }
      updateCombustible(id:number|string,data:any){
        return this.http.put(this.APIurl + `/combustible/${id}`,data);
      }
      deleteCombustible(id:number|string){
        return this.http.delete(this.APIurl + `/combustible/${id}`);
      }

       //gestion TipoVehiculo
  getTipoVehiculoList():Observable<any[]>{
    return this.http.get<any>(this.APIurl + '/tipo_vehiculo');
      }
      getTipoVehiculoById(id:number):Observable<tipoVehiculo>{
        return this.http.get<tipoVehiculo>(this.APIurl + `/tipo_vehiculo/${id}`);
       }
    
      addTipoVehiculo(data:any){
        return this.http.post(this.APIurl + '/tipo_vehiculo', data);
      }
      updateTipoVehiculo(id:number|string,data:any){
        return this.http.put(this.APIurl + `/tipo_vehiculo/${id}`,data);
      }
      deleteTipoVehiculo(id:number|string){
        return this.http.delete(this.APIurl + `/tipo_vehiculo/${id}`);
      }
}
