import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  tbusqueda: any;
  recetaEncontrada: any;
  recetas:any;

  constructor(private http:HttpClient) { }

  encontrarReceta(input:any){
    this.tbusqueda = input.value;
    this.http.get('http://localhost:4200/assets/data/recetas.json').subscribe((food) => {
        this.recetas = food;
      });
    this.recetaEncontrada = this.recetas.filter((element:any) => element.id.toString().includes(input));
    return this.recetaEncontrada[0]
  }
}
