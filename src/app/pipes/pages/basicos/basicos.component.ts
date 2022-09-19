import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  nombre: string = 'joaquín ángel';

  precio: number = 9523.4866;

  fecha: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
