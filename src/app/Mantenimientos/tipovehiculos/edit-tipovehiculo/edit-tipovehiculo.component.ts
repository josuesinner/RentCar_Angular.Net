import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClienteServicioService } from 'src/app/core/services/cliente-servicio.service';
import { tipoVehiculo } from 'src/app/Models/tipoVehiculoModel';

@Component({
  selector: 'app-edit-tipovehiculo',
  templateUrl: './edit-tipovehiculo.component.html',
  styleUrls: ['./edit-tipovehiculo.component.css']
})
export class EditTipovehiculoComponent implements OnInit{

  constructor(private router: Router,private route: ActivatedRoute, private service: ClienteServicioService,private toastr: ToastrService){}

  @Input() tipovehiculo: any;
  id_Tipo_Vehiculo: number = 0;
    descripcion: string = "";
    estado: boolean = false;

    tipoVehiculoDetalle!: tipoVehiculo;

    ngOnInit(): void {
      this.route.paramMap.subscribe({
        next:(params)=>{
          const id = params.get('id');
  
          if(id){
            this.service.getTipoVehiculoById(Number(id)).subscribe({
              next:(response:tipoVehiculo)=>{
               this.tipoVehiculoDetalle = response
              }
            });
          }
        }
      })
    }

    updatetipoVehiculo(){

      if (this.tipoVehiculoDetalle.descripcion == "") {
        this.toastr.error('Descripcion no puede estar vacia', 'Notification');
      } else {
        this.service.updateTipoVehiculo(this.tipoVehiculoDetalle.id_Tipo_Vehiculo,this.tipoVehiculoDetalle).subscribe({
          next:(cliente)=>{
            this.toastr.success('Tipo Vehiculo Editado exitosamente', 'Notification');
            this.router.navigate(['/home/tipovehiculos']);
          }
        });
      }
      
    }
  
    deletetipoVehiculo(){
      this.service.deleteTipoVehiculo(this.tipoVehiculoDetalle.id_Tipo_Vehiculo).subscribe({
        next:(empleado)=>{
          this.toastr.error('Tipo Vehiculo Eliminado', 'Notification');
          this.router.navigate(['/home/tipovehiculos']);
        }
      });
    }

}
