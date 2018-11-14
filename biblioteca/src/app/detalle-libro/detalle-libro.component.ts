import { Component, OnInit, Input } from '@angular/core';
import { Libro } from '../shared/models/libro';

@Component({
  selector: 'app-detalle-libro',
  templateUrl: './detalle-libro.component.html',
  styleUrls: ['./detalle-libro.component.css']
})
export class DetalleLibroComponent implements OnInit {

  @Input()
  libro : Libro;

  constructor() { }

  ngOnInit() {
  }
  
  restarCopias() : void{
    if(this.libro.copias > 0)
      this.libro.copias -=1;
  }

  sumarCopias() : void{
    if(this.libro.copias < this.libro.max)
      this.libro.copias +=1;
  }
}
