import { formatDate } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ClienteServicioService } from 'src/app/core/services/cliente-servicio.service';
import { empleado } from 'src/app/Models/empleadoModel';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  EmpleadoList$!: Observable<any[]>;

  constructor(private router: Router, private route: ActivatedRoute, private service: ClienteServicioService, private toastr: ToastrService) { }

  @Input() Empleado: any;
  id_Empleado: number = 0;
  nombre: string = "";
  cedula: string = "";
  tanda_Labor: string = "";
  porciento_Comision: string = "";
  fecha_Ingreso: Date = new Date;
  estado: boolean = false;

  addEmpleadoModel: empleado = {
    id_Empleado: 0,
    nombre: '',
    cedula: '',
    tanda_Labor: '',
    porciento_Comision: '',
    fecha_Ingreso: new Date (formatDate(this.fecha_Ingreso, 'yyyy-MM-dd', 'en')),
    estado: false
  }

  ngOnInit(): void {
    this.EmpleadoList$ = this.service.getEmpleadoList();
  }

  goToeditempleado(id_Empleado: any) {
    this.router.navigate(['/home/editempleado', id_Empleado]);
  }

  addempleado(){

    if (this.addEmpleadoModel.nombre == "" && this.addEmpleadoModel.cedula == ""
        && this.addEmpleadoModel.tanda_Labor == "" && this.addEmpleadoModel.porciento_Comision == "") {
      this.toastr.error('Uno o varios campos no pueden estar vacios', 'Notification');
    } else {
      this.service.addEmpleado(this.addEmpleadoModel).subscribe({
        next:(empleado)=>{
          this.toastr.success('Empleado creado exitosamente', 'Notification');
          this.EmpleadoList$ = this.service.getEmpleadoList();
        }
      });
    }
    
  }
}
