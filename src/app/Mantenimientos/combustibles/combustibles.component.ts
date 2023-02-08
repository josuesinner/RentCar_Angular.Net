import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ClienteServicioService } from 'src/app/core/services/cliente-servicio.service';
import { combustible } from 'src/app/Models/combustibleModel';

@Component({
  selector: 'app-combustibles',
  templateUrl: './combustibles.component.html',
  styleUrls: ['./combustibles.component.css']
})
export class CombustiblesComponent implements OnInit {

  combustibleList$!: Observable<any[]>;

  constructor(private router: Router, private route: ActivatedRoute, private service: ClienteServicioService, private toastr: ToastrService) { }

  @Input() combustible: any;
  id_Combustible: number = 0;
  descripcion: string = "";
  estado: boolean = false;

  addcombustibleModel: combustible = {
    id_Combustible: 0,
    descripcion: '',
    estado: false
  }

  ngOnInit(): void {
    this.combustibleList$ = this.service.getCombustibleList();
  }

  goToeditcombustible(id_Combustible: any) {
    this.router.navigate(['/home/editcombustible', id_Combustible]);
  }

  addcombustible() {

    if (this.addcombustibleModel.descripcion == "") {
      this.toastr.error('Descripcion no puede estar vacia', 'Notification');
    } else {
      this.service.addCombustible(this.addcombustibleModel).subscribe({
        next: (combustible) => {
          this.toastr.success('Combustible creado exitosamente', 'Notification');
          this.combustibleList$ = this.service.getCombustibleList();
        }
      });
    }
  }

}
