import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClienteServicioService } from 'src/app/core/services/cliente-servicio.service';
import { marcas } from 'src/app/Models/marcasModel';

@Component({
  selector: 'app-edit-marca',
  templateUrl: './edit-marca.component.html',
  styleUrls: ['./edit-marca.component.css']
})
export class EditMarcaComponent implements OnInit{

  constructor(private router: Router,private route: ActivatedRoute, private service: ClienteServicioService,private toastr: ToastrService){}

  @Input() marca: any;
  id_Marca: number = 0;
  descripcionMarca: string = "";
    estado: boolean = false;

    marcaDetalle!: marcas;

    ngOnInit(): void {
      this.route.paramMap.subscribe({
        next:(params)=>{
          const id = params.get('id');
  
          if(id){
            this.service.getMarcaById(Number(id)).subscribe({
              next:(response:marcas)=>{
               this.marcaDetalle = response
              }
            });
          }
        }
      })
    }

    updatemarca(){

      if (this.marcaDetalle.descripcion == "") {
        this.toastr.error('Descripcion no puede estar vacia', 'Notification');
      } else {
        this.service.updateMarca(this.marcaDetalle.id_Marca,this.marcaDetalle).subscribe({
          next:(cliente)=>{
            this.toastr.success('Marca Editada exitosamente', 'Notification');
            this.router.navigate(['/home/marcas']);
          }
        });
      }
      
    }
  
    deletemarca(){
      this.service.deleteMarca(this.marcaDetalle.id_Marca).subscribe({
        next:(empleado)=>{
          this.toastr.error('Marca Eliminada', 'Notification');
          this.router.navigate(['/home/marcas']);
        }
      });
    }
}
