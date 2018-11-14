import { Component, OnInit } from '@angular/core';
import { Libro } from '../shared/models/libro';
import { Mock } from 'protractor/built/driverProviders';
import { LibrosMock } from '../shared/libros-mock';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  libros : Array<Libro>;
  libroSeleccionado : Libro;
  constructor() { }

  ngOnInit() {
    this.libros = LibrosMock;
  }

  onSelect(libro : Libro) :void{
    this.libroSeleccionado = libro;
  }

}
