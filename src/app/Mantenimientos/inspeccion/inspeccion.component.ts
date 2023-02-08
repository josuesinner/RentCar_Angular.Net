import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ClienteServicioService } from 'src/app/core/services/cliente-servicio.service';
import { inspeccion } from 'src/app/Models/inspeccionModel';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-inspeccion',
  templateUrl: './inspeccion.component.html',
  styleUrls: ['./inspeccion.component.css']
})
export class InspeccionComponent implements OnInit{

  inspeccionList$!: Observable<any[]>;
  vehiculoList!: any[];
  clienteList!: any[];
  empleadoList!: any[];

  constructor(private router: Router, private route: ActivatedRoute, private service: ClienteServicioService, private toastr: ToastrService) { }
  fileName= 'Renta/Devolucion.xlsx';

  @Input() inspeccion: any;
  id_Transaccion: number = 0;
    vehiculoId: number = 0;
    cedula: string = '';
    clienteId: number = 0;
    tiene_Ralladuras: boolean = false;
    cantidad_Combustible: string = '';
    goma_respuesta: boolean = false;
    tiene_Gato: boolean = false;
    roturas_cristal: boolean = false;
    izqFrontal: boolean= false;
    derFrontal: boolean= false;
    izqTrasera: boolean= false;
    derTrasera: boolean= false;
    etc: string = '';
    fecha: Date = new Date;
    empleadoId: number = 0;
    estado: boolean = false

    addinspeccionModel: inspeccion = {
      id_Transaccion: 0,
    vehiculoId: 0,
    cedula: '',
    clienteId: 0,
    tiene_Ralladuras: false,
    cantidad_Combustible: '',
    goma_respuesta: false,
    tiene_Gato: false,
    roturas_cristal: false,
    izqFrontal: false,
    derFrontal: false,
    izqTrasera: false,
    derTrasera: false,
    etc: 'N/A',
    fecha: new Date,
    empleadoId: 0,
    estado: false
    }

  ngOnInit(): void {
    this.inspeccionList$ = this.service.getInspeccionList();

    this.service.getVehiculoList()
      .subscribe(response => {
        this.vehiculoList = response;
      });

      this.service.getClienteList()
      .subscribe(response => {
        this.clienteList = response;
      });

      this.service.getEmpleadoList()
      .subscribe(response => {
        this.empleadoList = response;
      });
  }

  goToeditinspeccion(id_Transaccion: any) {
    this.router.navigate(['/home/editinspeccion', id_Transaccion]);
  }

  addinspeccion() {
    if (this.addinspeccionModel.vehiculoId == 0 && this.addinspeccionModel.clienteId == 0 &&
      this.addinspeccionModel.empleadoId == 0 && this.addinspeccionModel.cantidad_Combustible == "") {
      this.toastr.error('Uno o varios campos no pueden estar vacios', 'Notification');
    } else {
      this.service.addInspeccion(this.addinspeccionModel).subscribe({
        next: (modelo) => {
          this.toastr.success('Inspeccion creada exitosamente', 'Notification');
          this.inspeccionList$ = this.service.getInspeccionList();
        }
      });
    }
    
  }

  exportexcel(): void
  {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName);
 
  }

}
