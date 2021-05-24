import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  personajes: Personaje[] = [
    {
      nombre:"Goku",
      poder: 15000
    },
    {
      nombre: "Vegeta",
      poder:7500
    },
    {
      nombre: "Krilin",
      poder: 600
    }
  ];
  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }
  agregarNuevoPersonaje(argumento:Personaje){
    // debugger;
    this.personajes.push(argumento);
  }
  constructor() { }

  ngOnInit(): void {
  }

  cambiarNombre(event:any){

  }
 

}
