import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {

  @Input()
  titularARecibir: string = '';

  @Output() datoEmitido: EventEmitter<string> = new EventEmitter();

  total: number = 0;

  num1: number = 0;
  num2: number = 0;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.currentData.subscribe(data => this.titularARecibir = data);
  }

  sum() {
    this.total = this.num1+this.num2;
  }

  enviarDatosAlPadre() {
    // Emitimos el valor que queremos pasar al componente padre
    this.dataService.changeData2('Data enviada desde Hijo');
  }

}
