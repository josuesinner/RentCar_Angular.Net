import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClienteServicioService } from 'src/app/core/services/cliente-servicio.service';
import { combustible } from 'src/app/Models/combustibleModel';

@Component({
  selector: 'app-edit-combustible',
  templateUrl: './edit-combustible.component.html',
  styleUrls: ['./edit-combustible.component.css']
})
export class EditCombustibleComponent implements OnInit{

  constructor(private router: Router,private route: ActivatedRoute, private service: ClienteServicioService, private toastr: ToastrService){}

  @Input() combustible: any;
  id_Combustible: number = 0;
    descripcion: string = "";
    estado: boolean = false;

    combustibleDetalle!: combustible;

    ngOnInit(): void {
      this.route.paramMap.subscribe({
        next:(params)=>{
          const id = params.get('id');
  
          if(id){
            this.service.getCombustibleById(Number(id)).subscribe({
              next:(response:combustible)=>{
               this.combustibleDetalle = response
              }
            });
          }
        }
      })
    }

    updatecombustible(){
      if (this.combustibleDetalle.descripcion == "") {
        this.toastr.error('Descripcion no puede estar vacia', 'Notification');
      } else {
        this.service.updateCombustible(this.combustibleDetalle.id_Combustible,this.combustibleDetalle).subscribe({
          next:(cliente)=>{
            this.toastr.success('Combustible editado exitosamente', 'Notification');
            this.router.navigate(['/home/combustibles']);
          }
        });
      }
      
    }
  
    deletecombustible(){
      this.service.deleteCombustible(this.combustibleDetalle.id_Combustible).subscribe({
        next:(empleado)=>{
          this.toastr.error('Combustible Eliminado', 'Notification');
          this.router.navigate(['/home/combustibles']);
        }
      });
    }

}
