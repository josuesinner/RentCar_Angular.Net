import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError, Observable,of } from 'rxjs';
import { ClienteServicioService } from 'src/app/core/services/cliente-servicio.service';
import { cliente } from 'src/app/Models/clienteModel';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clienteList$!: Observable<any[]>;
  clienteList: any = [];

  clienteListMap: Map<number, string> = new Map()

  constructor(private router: Router, private route: ActivatedRoute, private service: ClienteServicioService, private toastr: ToastrService) { }

  @Input() cliente: any;
  id_Cliente: number = 0;
  nombre: string = "";
  cedula: string = "";
  no_Tarjeta_CR: string = "";
  limite_Credito: string = "";
  tipo_Persona: string = "";
  estado: boolean = false;



  addClienteModel: cliente = {
    id_Cliente: 0,
    nombre: '',
    cedula: '',
    no_Tarjeta_CR: '',
    limite_Credito: '',
    tipo_Persona: '',
    estado: false
  };

  ClienteDetalle!: cliente;

  ngOnInit(): void {
    this.clienteList$ = this.service.getClienteList();
  }

  goToeditcliente(id_Cliente: any) {
    this.router.navigate(['/home/vistaEdit', id_Cliente]);
  }

  addCliente() {
    if (this.addClienteModel.nombre == "" && this.addClienteModel.cedula == ""
      && this.addClienteModel.no_Tarjeta_CR == "" && this.addClienteModel.limite_Credito == "") {
      this.toastr.error('Uno o varios campos no pueden estar vacios', 'Notification');
    }
    else {

      try {

        this.service.addCliente(this.addClienteModel).pipe(
          catchError((error) => {this.toastr.error('Cedula Invalida', 'Notification');
            return (error);
          }
          )
        ).subscribe(
          (cliente) => {
            this.toastr.success('Cliente creado exitosamente', 'Notification');
            this.clienteList$ = this.service.getClienteList();
          }
        );

      } catch (err) {

        catchError( (error) => {this.toastr.error('Cedula Invalida', 'Notification');
            return of (err);
          })

      }


    }
  }

}


