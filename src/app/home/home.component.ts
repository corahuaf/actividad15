import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
tittle = "  Data Binding Interpolation"
twoway:any ="el two data binding en angular nos permite modificar el valor de una propiedad de forma bidireccional, de forma que cuando nosotros modificamos el valor de una propiedad vista el valor tambien se actualiza en el modelo de datos"
ver=false
nombre!:any

hide(){
  this.ver=true
}
}
