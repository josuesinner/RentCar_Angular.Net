import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ClienteServicioService } from 'src/app/core/services/cliente-servicio.service';
import { marcas } from 'src/app/Models/marcasModel';
import { tipoVehiculo } from 'src/app/Models/tipoVehiculoModel';

@Component({
  selector: 'app-tipovehiculos',
  templateUrl: './tipovehiculos.component.html',
  styleUrls: ['./tipovehiculos.component.css']
})
export class TipovehiculosComponent implements OnInit{

  tipoVehiculoList$!: Observable<any[]>;

  constructor(private router: Router, private route: ActivatedRoute, private service: ClienteServicioService,private toastr: ToastrService) { }

  @Input() marca: any;
  id_Tipo_Vehiculo: number = 0;
  descripcion: string = "";
  estado: boolean = false

  addtipoVehiculoModel: tipoVehiculo = {
    id_Tipo_Vehiculo: 0,
    descripcion: '',
    estado: false
  }

  ngOnInit(): void {
    this.tipoVehiculoList$ = this.service.getTipoVehiculoList();
  }

  goToedittipoVehiculo(id_Tipo_Vehiculo: any) {
    this.router.navigate(['/home/edittipoVehiculo', id_Tipo_Vehiculo]);
  }

  addtipoVehiculo() {

    if (this.addtipoVehiculoModel.descripcion == "") {
      this.toastr.error('Descripcion no puede estar vacia', 'Notification');
    } else {
      this.service.addTipoVehiculo(this.addtipoVehiculoModel).subscribe({
        next: (combustible) => {
          this.toastr.success('Tipo Vehiculo creado exitosamente', 'Notification');
          this.tipoVehiculoList$ = this.service.getTipoVehiculoList();
        }
      });
    }
    
  }

}
