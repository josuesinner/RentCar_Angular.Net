import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { ClienteServicioService } from 'src/app/core/services/cliente-servicio.service';
import { rentaDevolucion } from 'src/app/Models/rentaDevolucionModel';
import * as XLSX from 'xlsx';
import {map,catchError} from 'rxjs/operators';

@Component({
  selector: 'app-renta-devolucion',
  templateUrl: './renta-devolucion.component.html',
  styleUrls: ['./renta-devolucion.component.css']
})
export class RentaDevolucionComponent implements OnInit{

  

  rentaList$!: Observable<any[]>;
  vehiculoList!: any[];
  clienteList!: any[];
  empleadoList!: any[];
  inspeccionesList!: any[];

  constructor(private router: Router, private route: ActivatedRoute, private service: ClienteServicioService,private toastr: ToastrService) { }
  fileName= 'Renta/Devolucion.xlsx';

  @Input() rentaDevolucion: any;
  no_Renta: number = 0;
    empleadoId: number = 0;
    vehiculoId: number = 0;
    clienteId: number = 0;
    fecha_Renta: Date = new Date;
    fecha_Devolucion: Date = new Date;
    monto_Dia: string = '';
    cantidad_dias: number = 0;
    comentario: string = '';
    devolucion: boolean = false;
    estado: boolean = false

    addrentaDevolucionModel: rentaDevolucion={
      no_Renta: 0,
    empleadoId: 0,
    vehiculoId:  0,
    clienteId:  0,
    fecha_Renta: new Date,
    fecha_Devolucion: new Date,
    monto_Dia:  '',
    cantidad_dias:  0,
    comentario: '',
    devolucion: false,
    estado: false,
    }

  ngOnInit(): void {

    this.rentaList$ = this.service.getRentaDevolucionList();

    this.service.getInspeccionList()
      .subscribe(response => {
        this.inspeccionesList = response;
      });

    this.service.getVehiculoList()
      .subscribe(response => {
        this.vehiculoList = response;
      });

      this.service.getClienteList()
      .subscribe(response => {
        this.clienteList = response;
      });

      this.service.getEmpleadoList()
      .subscribe(response => {
        this.empleadoList = response;
      });
  }

  validarRenta(){
    
  }

  handlerFecha(){
    if(this.addrentaDevolucionModel.fecha_Renta && this.addrentaDevolucionModel.fecha_Devolucion) {
    const date1: any = new Date(this.addrentaDevolucionModel.fecha_Renta!);
    const date2: any = new Date(this.addrentaDevolucionModel.fecha_Devolucion!);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    if(date2<date1){
      this.toastr.warning('Campo Cant. Dias no puede ser menor a 0', 'Notification');
      this.addrentaDevolucionModel.fecha_Devolucion = null;
      this.addrentaDevolucionModel.fecha_Renta = null;
      this.addrentaDevolucionModel.cantidad_dias = 0;
    }else{
      this.addrentaDevolucionModel.cantidad_dias = diffDays ;
    }
    
  }
  }


  goToeditrenta(id_Transaccion: any) {
    this.router.navigate(['/home/editrentaDevolucion', id_Transaccion]);
  }

  addrenta() {
    if (this.addrentaDevolucionModel.vehiculoId == 0 && this.addrentaDevolucionModel.clienteId == 0 &&
      this.addrentaDevolucionModel.empleadoId == 0 && this.addrentaDevolucionModel.monto_Dia == "") {
      this.toastr.error('Uno o varios campos no pueden estar vacios', 'Notification');
    } 
    else {

      try{

        this.service.addRentaDevolucion(this.addrentaDevolucionModel).pipe(
          catchError((error)=>{this.toastr.error('Se necesita una inspeccion del Vehiculo', 'Notification');
          return (error);
          }

          )
        ).subscribe(
          (renta) => {
            this.toastr.success('Renta creada exitosamente', 'Notification');
            this.rentaList$ = this.service.getRentaDevolucionList();
            this.refresh();
          }
        );

      }catch(err){

        catchError( (error)=> {this.toastr.error('Se necesita una inspeccion del Vehiculo', 'Notification');
          return of(err);
        })

      }
      
    }
    
    
  }

  refresh(){
    this.addrentaDevolucionModel.no_Renta== 0;
        this.addrentaDevolucionModel.empleadoId== 0;
        this.addrentaDevolucionModel.vehiculoId==  0;
        this.addrentaDevolucionModel.clienteId==  0;
        this.addrentaDevolucionModel.fecha_Renta== new Date;
        this.addrentaDevolucionModel.fecha_Devolucion== new Date;
        this.addrentaDevolucionModel.monto_Dia==  '';
        this.addrentaDevolucionModel.cantidad_dias==  0;
        this.addrentaDevolucionModel.comentario== '';
        this.addrentaDevolucionModel.devolucion== false;
        this.addrentaDevolucionModel.estado== false;
  }

  exportexcel(): void
  {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName);
 
  }

}
