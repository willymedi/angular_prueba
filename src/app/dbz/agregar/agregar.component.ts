import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  @Input() nuevo:Personaje = {
    nombre:"",
    poder:0
  };
  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  
  agregar(){
    if(this.nuevo.nombre.trim().length===0){
      return;
    }
    this.onNuevoPersonaje.emit(this.nuevo);
    this.nuevo = {nombre:"",poder:0}

  }

}
