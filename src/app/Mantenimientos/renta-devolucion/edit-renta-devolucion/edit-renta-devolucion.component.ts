import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClienteServicioService } from 'src/app/core/services/cliente-servicio.service';
import { rentaDevolucion } from 'src/app/Models/rentaDevolucionModel';

@Component({
  selector: 'app-edit-renta-devolucion',
  templateUrl: './edit-renta-devolucion.component.html',
  styleUrls: ['./edit-renta-devolucion.component.css']
})
export class EditRentaDevolucionComponent implements OnInit{

  vehiculoList!: any[];
  clienteList!: any[];
  empleadoList!: any[];

  constructor(private router: Router, private route: ActivatedRoute, private service: ClienteServicioService, private toastr: ToastrService) { }

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

    rentaDetalle!: rentaDevolucion;

    ngOnInit(): void {

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

      this.route.paramMap.subscribe({
        next: (params) => {
          const id = params.get('id');
  
          if (id) {
            this.service.getRentaDevolucionById(Number(id)).subscribe({
              next: (response: rentaDevolucion) => {
                this.fecha_Renta = response.fecha_Renta!;
                this.fecha_Devolucion = response.fecha_Devolucion!;
                this.rentaDetalle = response;
              }
            });
          }
        }
      })
    }

    handlerFecha(){
      if(this.rentaDetalle.fecha_Renta && this.rentaDetalle.fecha_Devolucion) {
      const date1: any = new Date(this.rentaDetalle.fecha_Renta!);
      const date2: any = new Date(this.rentaDetalle.fecha_Devolucion!);
      const diffTime = Math.abs(date2 - date1);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
      if(date2<date1){
        alert('Fecha Desde no puede ser menor a Fecha hasta');
        this.rentaDetalle.fecha_Devolucion = this.rentaDetalle.fecha_Devolucion;
        this.rentaDetalle.fecha_Renta = this.rentaDetalle.fecha_Renta ;
        this.rentaDetalle.cantidad_dias = this.rentaDetalle.cantidad_dias;
      }else{
        this.rentaDetalle.cantidad_dias = diffDays ;
      }
      
    }
    }
  
    updaterenta() {
      this.service.updateRentaDevolucion(this.rentaDetalle.no_Renta, this.rentaDetalle).subscribe({
        next: (inspeccion) => {
          this.toastr.success('Renta Editada exitosamente', 'Notification');
          this.router.navigate(['/home/renta-devoluciones']);
        }
      });
    }
  
    deleterenta() {
      this.service.deleteRentaDevolucion(this.rentaDetalle.no_Renta).subscribe({
        next: (inspeccion) => {
          this.toastr.error('Renta Eliminada', 'Notification');
          this.router.navigate(['/home/renta-devoluciones']);
        }
      });
    }

}
