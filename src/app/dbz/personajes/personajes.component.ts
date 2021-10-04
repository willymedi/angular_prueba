import { Component, OnInit, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DBzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  // @Input() personajes:Personaje[] = [];
  get personajes(){
    return this.dbzService.personajes;
  }
  constructor(private dbzService: DBzService) { }

  ngOnInit(): void {
  }

}
