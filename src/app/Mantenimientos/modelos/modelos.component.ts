import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ClienteServicioService } from 'src/app/core/services/cliente-servicio.service';
import { marcas } from 'src/app/Models/marcasModel';
import { modelos } from 'src/app/Models/modelosModel';

@Component({
  selector: 'app-modelos',
  templateUrl: './modelos.component.html',
  styleUrls: ['./modelos.component.css']
})
export class ModelosComponent implements OnInit{

  modeloList$!: Observable<any[]>;
  marcaList!: any[];

  constructor(private router: Router, private route: ActivatedRoute, private service: ClienteServicioService,private toastr: ToastrService) { }

  addmarcaModel: marcas = {
    id_Marca: 0,
    descripcion: '',
    estado: false
  }

  @Input() modelo: any;
  id_Modelo: number = 0;
    marcaId: number = 0;
    descripcion: string = "";
    estado: boolean = false

    addmodeloModel: modelos={
      id_Modelo: 0,
    marcaId: 0,
    descripcion: '',
    estado: false
    }

    ngOnInit(): void {
      this.modeloList$ = this.service.getModeloList();
      this.service.getMarcaList()
        .subscribe(response => {
          this.marcaList = response;
        });
    }
  
    goToeditmodelo(id_Modelo: any) {
      this.router.navigate(['/home/editmodelo', id_Modelo]);
    }
  
    addmodelo() {

      if (this.addmodeloModel.descripcion == "") {
        this.toastr.error('Descripcion no puede estar vacia', 'Notification');
      } else {
        this.service.addModelo(this.addmodeloModel).subscribe({
          next: (modelo) => {
            this.toastr.success('Modelo creado exitosamente', 'Notification');
            this.modeloList$ = this.service.getModeloList();
          }
        });
      }
      
    }

}
