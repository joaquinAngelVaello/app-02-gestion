import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../services/paises.service';


@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  paises: any[] = [];

  constructor(private paisesService: PaisesService) { }

  ngOnInit(): void {
    this.obtenerPaises();
    
    console.log('Estamos obteniendo países!');
  }

  obtenerPaises(){
    this.paisesService.getPaises()   
    .subscribe( respPaises => {
      console.log( respPaises[3].capital );
      this.paises = respPaises;
    })
  }

}
