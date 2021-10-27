import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.css']
})
export class ConvertComponent implements OnInit {

  cantidad = 0;
  base = 0;
  miBase = 'BIN';
  result = '';
  bases: string[] = ['BIN', 'OCT', 'HEX'];

  constructor() { }

  ngOnInit(): void {
  }

  convertir() {
    switch(this.miBase) {
      case 'BIN':
        this.base = 2;
        break;
      case 'OCT':
        this.base = 8;
        break;
      case 'HEX':
        this.base = 16;
        break;
      default:
        this.base = 10;
        break;
    }
    console.log('Base: ' + this.miBase);
    console.log('Resultado: ' + this.result);
    this.result = this.cantidad.toString(this.base).toUpperCase();
  }

}