import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ClienteServicioService } from 'src/app/core/services/cliente-servicio.service';
import { vehiculo } from 'src/app/Models/vehiculoModel';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit{

  vehiculoList$!: Observable<any[]>;
  marcaList!: any[];
  tipoVehiculoList!: any[];
  modeloList!: any[];
  combustibleList!: any[];

  constructor(private router: Router, private route: ActivatedRoute, private service: ClienteServicioService,private toastr: ToastrService) { }

  @Input() vehiculo: any;
    id_Vehiculo:number =  0;
    descripcion: string = "";
    no_Chasis: string = "";
    no_Motor: string = "";
    no_Placa: string = "";
    tipo_VehiculoId:number =  0;
    marcaId:number =  0;
    modeloId:number =  0;
    combustibleId:number =  0;
    estado: boolean = false
  

  addvehiculoModel: vehiculo = {
    id_Vehiculo: 0,
    descripcion: '',
    no_Chasis: '',
    no_Motor: '',
    no_Placa: '',
    tipo_VehiculoId: 0,
    marcaId: 0,
    modeloId: 0,
    combustibleId: 0,
    estado: false
  }

  ngOnInit(): void {
    this.vehiculoList$ = this.service.getVehiculoList();
    
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
      
  }

  goToeditvehiculo(id_Vehiculo: any) {
    this.router.navigate(['/home/editvehiculo', id_Vehiculo]);
  }

  addvehiculo() {
    if (this.addvehiculoModel.descripcion == "" && this.addvehiculoModel.no_Chasis == "" &&
    this.addvehiculoModel.no_Motor == "" && this.addvehiculoModel.no_Placa == "") {
      this.toastr.error('Uno o varios campos no pueden estar vacios', 'Notification');
    } else {
      this.service.addVehiculo(this.addvehiculoModel).subscribe({
        next: (modelo) => {
          this.toastr.success('Vehiculo creado exitosamente', 'Notification');
          this.vehiculoList$ = this.service.getVehiculoList();
        }
      });
    }
    
  }

}
