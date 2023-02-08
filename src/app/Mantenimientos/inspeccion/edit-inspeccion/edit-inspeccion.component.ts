import { formatDate } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ClienteServicioService } from 'src/app/core/services/cliente-servicio.service';
import { inspeccion } from 'src/app/Models/inspeccionModel';

@Component({
  selector: 'app-edit-inspeccion',
  templateUrl: './edit-inspeccion.component.html',
  styleUrls: ['./edit-inspeccion.component.css']
})
export class EditInspeccionComponent implements OnInit{

  inspeccionList$!: Observable<any[]>;
  vehiculoList!: any[];
  clienteList!: any[];
  empleadoList!: any[];

  constructor(private router: Router, private route: ActivatedRoute, private service: ClienteServicioService, private toastr: ToastrService) { }

  @Input() inspeccion: any;
  id_Transaccion: number = 0;
    vehiculoId: number = 0;
    cedula: string = '';
    clienteId: number = 0;
    tiene_Ralladuras: boolean = false;
    cantidad_Combustible: string = '';
    goma_respuesta: boolean = false;
    tiene_Gato: boolean = false;
    roturas_cristal: boolean = false;
    izqFrontal: boolean= false;
    derFrontal: boolean= false;
    izqTrasera: boolean= false;
    derTrasera: boolean= false;
    etc: string = '';
    fecha: Date = new Date;
    empleadoId: number = 0;
    estado: boolean = false

    InspeccionDetalle!: inspeccion;

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
            this.service.getInspeccionById(Number(id)).subscribe({
              next: (response: inspeccion) => {
                this.fecha = response.fecha;
                this.InspeccionDetalle = response;
              }
            });
          }
        }
      })
    }
  
    updateinspeccion() {

      if (this.InspeccionDetalle.vehiculoId == 0 && this.InspeccionDetalle.clienteId == 0 &&
        this.InspeccionDetalle.empleadoId == 0 && this.InspeccionDetalle.cantidad_Combustible == "") {
        this.toastr.error('Uno o varios campos no pueden estar vacios', 'Notification');
      } else {
        this.service.updateInspeccion(this.InspeccionDetalle.id_Transaccion, this.InspeccionDetalle).subscribe({
          next: (inspeccion) => {
            this.toastr.success('Inspeccion Editada', 'Notification');
            this.router.navigate(['/home/inspecciones']);
          }
        });
      }
      
    }
  
    deleteinspeccion() {
      this.service.deleteInspeccion(this.InspeccionDetalle.id_Transaccion).subscribe({
        next: (inspeccion) => {
          this.toastr.error('Inspeccion Eliminada', 'Notification');
          this.router.navigate(['/home/inspecciones']);
        }
      });
    }

}
