import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ClienteServicioService } from 'src/app/core/services/cliente-servicio.service';
import { marcas } from 'src/app/Models/marcasModel';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})
export class MarcasComponent implements OnInit {

  marcaList$!: Observable<any[]>;

  constructor(private router: Router, private route: ActivatedRoute, private service: ClienteServicioService,private toastr: ToastrService) { }

  @Input() marca: any;
  id_Marca: number = 0;
  descripcion: string = "";
  estado: boolean = false

  addmarcaModel: marcas = {
    id_Marca: 0,
    descripcion: '',
    estado: false
  }

  ngOnInit(): void {
    this.marcaList$ = this.service.getMarcaList();
  }

  goToeditmarca(id_Combustible: any) {
    this.router.navigate(['/home/editmarca', id_Combustible]);
  }

  addmarca() {
    if (this.addmarcaModel.descripcion == "") {
      this.toastr.error('Descripcion no puede estar vacia', 'Notification');
    } else {
      this.service.addMarca(this.addmarcaModel).subscribe({
        next: (combustible) => {
          this.toastr.success('Maca creada exitosamente', 'Notification');
          this.marcaList$ = this.service.getMarcaList();
        }
      });
    }
    
  }
}
