import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ClienteServicioService } from 'src/app/core/services/cliente-servicio.service';
import { vehiculo } from 'src/app/Models/vehiculoModel';

@Component({
  selector: 'app-edit-vehiculo',
  templateUrl: './edit-vehiculo.component.html',
  styleUrls: ['./edit-vehiculo.component.css']
})
export class EditVehiculoComponent implements OnInit {

  vehiculoList$!: Observable<any[]>;
  marcaList!: any[];
  tipoVehiculoList!: any[];
  modeloList!: any[];
  combustibleList!: any[];

  constructor(private router: Router, private route: ActivatedRoute, private service: ClienteServicioService,private toastr: ToastrService) { }

  @Input() vehiculo: any;
  id_Vehiculo: number = 0;
  descripcion: string = "";
  no_Chasis: string = "";
  no_Motor: string = "";
  no_Placa: string = "";
  tipo_VehiculoId: number = 0;
  marcaId: number = 0;
  modeloId: number = 0;
  combustibleId: number = 0;
  estado: boolean = false

  vehiculoDetalle!: vehiculo;


  ngOnInit(): void {

    this.service.getMarcaList()
      .subscribe(response => {
        this.marcaList = response;
      });

      this.service.getTipoVehiculoList()
      .subscribe(response => {
        this.tipoVehiculoList = response;
      });

      this.service.getModeloList()
      .subscribe(response => {
        this.modeloList = response;
      });

      this.service.getCombustibleList()
      .subscribe(response => {
        this.combustibleList = response;
      });

    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          this.service.getVehiculoById(Number(id)).subscribe({
            next: (response: vehiculo) => {
              this.vehiculoDetalle = response;
            }
          });
        }
      }
    })
  }

  updatevehiculo() {
    if (this.vehiculoDetalle.descripcion == "" && this.vehiculoDetalle.no_Chasis == "" &&
    this.vehiculoDetalle.no_Motor == "" && this.vehiculoDetalle.no_Placa == "") {
      this.toastr.error('Uno o varios campos no pueden estar vacios', 'Notification');
    } else {
      this.service.updateVehiculo(this.vehiculoDetalle.id_Vehiculo, this.vehiculoDetalle).subscribe({
        next: (cliente) => {
          this.toastr.success('Vehiculo Editado exitosamente', 'Notification');
          this.router.navigate(['/home/vehiculos']);
        }
      });
    }
    
  }

  deletevehiculo() {
    this.service.deleteVehiculo(this.vehiculoDetalle.id_Vehiculo).subscribe({
      next: (empleado) => {
        this.toastr.error('Vehiculo Eliminado', 'Notification');
        this.router.navigate(['/home/vehiculos']);
      }
    });
  }

}
