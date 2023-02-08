import { formatDate } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClienteServicioService } from 'src/app/core/services/cliente-servicio.service';
import { empleado } from 'src/app/Models/empleadoModel';

@Component({
  selector: 'app-edit-empleado',
  templateUrl: './edit-empleado.component.html',
  styleUrls: ['./edit-empleado.component.css']
})
export class EditEmpleadoComponent implements OnInit{

  constructor(private router: Router,private route: ActivatedRoute, private service: ClienteServicioService,private toastr: ToastrService){}

  @Input() Empleado: any;
  id_Empleado: number = 0;
  nombre: string = "";
  cedula: string = "";
  tanda_Labor: string = "";
  porciento_Comision: string = "";
  fecha_Ingreso: Date = new Date();
  estado: boolean = false;

  EmpleadoDetalle!: empleado;

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
        const id = params.get('id');

        if(id){
          this.service.getEmpleadoById(Number(id)).subscribe({
            next:(response:empleado)=>{
              this.fecha_Ingreso = response.fecha_Ingreso;
             this.EmpleadoDetalle = response;
            }
          });
        }
      }
    })
  }

  updateempleado(){
    if (this.EmpleadoDetalle.nombre == "" && this.EmpleadoDetalle.cedula == ""
        && this.EmpleadoDetalle.tanda_Labor == "" && this.EmpleadoDetalle.porciento_Comision == "") {
      this.toastr.error('Uno o varios campos no pueden estar vacios', 'Notification');
    } else {
      this.service.updateEmpleado(this.EmpleadoDetalle.id_Empleado,this.EmpleadoDetalle).subscribe({
        next:(cliente)=>{
          this.toastr.success('Empleado Editado', 'Notification');
          this.router.navigate(['/home/empleados']);
        }
      });
    }
   
  }

  deleteempleado(){
    this.service.deleteEmpleado(this.EmpleadoDetalle.id_Empleado).subscribe({
      next:(empleado)=>{
        this.toastr.error('Empleado Eliminado', 'Notification');
        this.router.navigate(['/home/empleados']);
      }
    });
  }

}
