import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClienteServicioService } from 'src/app/core/services/cliente-servicio.service';
import { cliente } from 'src/app/Models/clienteModel';

@Component({
  selector: 'app-vista-editar',
  templateUrl: './vista-editar.component.html',
  styleUrls: ['./vista-editar.component.css']
})
export class VistaEditarComponent implements OnInit {

  @Input() cliente: any;
  id_Cliente: number = 0;
  nombre: string = "";
  cedula: string = "";
  no_Tarjeta_CR: string = "";
  limite_Credito: string = "";
  tipo_Persona: string = "";
  estado: boolean = false;

  ClienteDetalle!: cliente;

  constructor(private router: Router,private route: ActivatedRoute, private service: ClienteServicioService, private toastr: ToastrService){}

  ngOnInit(): void {

    this.route.paramMap.subscribe({
      next:(params)=>{
        const id = params.get('id');

        if(id){
          this.service.getClienteById(Number(id)).subscribe({
            next:(response:cliente)=>{
             this.ClienteDetalle = response
            }
          });
        }
      }
    })
  }

  updateCliente(){
    if (this.ClienteDetalle.nombre == "" && this.ClienteDetalle.cedula == ""
        && this.ClienteDetalle.no_Tarjeta_CR == "" && this.ClienteDetalle.limite_Credito == "") {
      this.toastr.error('Uno o varios campos no pueden estar vacios', 'Notification');
    } else {
      this.service.updateCliente(this.ClienteDetalle.id_Cliente,this.ClienteDetalle).subscribe({
        next:(cliente)=>{
          this.toastr.success('Cliente editado exitosamente', 'Notification');
          this.router.navigate(['/home/clientes']);
        }
      });
    }
    
  }

  deleteCliente(){
    this.service.deleteCliente(this.ClienteDetalle.id_Cliente).subscribe({
      next:(cliente)=>{
        this.toastr.error('Cliente Eliminado', 'Notification');
        this.router.navigate(['/home/clientes']);
      }
    });
  }
  
  

}
