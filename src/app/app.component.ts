import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { DataService } from './services/data.service';
//import { InvoiceTypeComponent } from './pages/invoice-type/invoice-type.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'practica-ufg';
  tituloAEnviar: string = 'Titulo enviado desde el Padre al Hijo';
  mensajeRecibido: string = '';

  @ViewChild('sidenav') sidenav: MatSidenav | undefined;

  constructor(private dataService: DataService) {
    this.dataService.changeData(this.tituloAEnviar)
  }
  ngOnInit() {
    this.dataService.currentData2.subscribe(data => this.mensajeRecibido = data);
  }

  
}
