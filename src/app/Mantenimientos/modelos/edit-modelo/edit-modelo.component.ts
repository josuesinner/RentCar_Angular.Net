import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClienteServicioService } from 'src/app/core/services/cliente-servicio.service';
import { modelos } from 'src/app/Models/modelosModel';

@Component({
  selector: 'app-edit-modelo',
  templateUrl: './edit-modelo.component.html',
  styleUrls: ['./edit-modelo.component.css']
})
export class EditModeloComponent implements OnInit {

  modeloDetalle!: modelos;
  marcaList!: any[];

  constructor(private router: Router, private route: ActivatedRoute, private service: ClienteServicioService,private toastr: ToastrService) { }

  @Input() modelo: any;
  id_Modelo: number = 0;
  marcaId: number = 0;
  descripcion: string = "";
  estado: boolean = false




  ngOnInit(): void {

    this.service.getMarcaList()
        .subscribe(response => {
          this.marcaList = response;
        });

    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          this.service.getModeloById(Number(id)).subscribe({
            next: (response: modelos) => {
              this.modeloDetalle = response
              // this.service.getMarcaById(Number(id))
              //   .subscribe(response => {
              //     this.marcaList = response;
              //   });
            }
          });
        }
      }
    })
  }

  updatemodelo() {

    if (this.modeloDetalle.descripcion == "") {
      this.toastr.error('Descripcion no puede estar vacia', 'Notification');
    } else {
      this.service.updateModelo(this.modeloDetalle.id_Modelo, this.modeloDetalle).subscribe({
        next: (cliente) => {
          this.toastr.success('Modelo Editado exitosamente', 'Notification');
          this.router.navigate(['/home/modelos']);
        }
      });
    }
    
  }

  deletemodelo() {
    this.service.deleteModelo(this.modeloDetalle.id_Modelo).subscribe({
      next: (empleado) => {
        this.toastr.error('Modelo Eliminado', 'Notification');
        this.router.navigate(['/home/modelos']);
      }
    });
  }

}
