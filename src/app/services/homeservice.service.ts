import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeserviceService {

  tbusqueda:any;
  arrayFiltrado:any;

  constructor() { }

  filtrarArray(input:any, recetas:any){
    this.tbusqueda = input.value;
    this.arrayFiltrado = recetas.filter((element:any) => element.name.toLowerCase().includes(this.tbusqueda.toLowerCase()));
    console.log("Array: ", this.arrayFiltrado);
    console.log("Input: ", this.tbusqueda);
    return this.arrayFiltrado
  }

  cambiarColor(enableAl:boolean, enableMe:boolean, enableMa:boolean){
    let btn1 = document.getElementById('btn1');
    let btn2 = document.getElementById('btn2');
    let btn3 = document.getElementById('btn3');
    if(enableAl==true){
      enableMa=false;
      enableMe=false;
      btn1?.classList.remove('btn-secondary');
      btn1?.classList.add('btn-active');
      btn2?.classList.remove('btn-active');
      btn2?.classList.add('btn-secondary');
      btn3?.classList.remove('btn-active');
      btn3?.classList.add('btn-secondary');
      }else{
        if(enableMe==true){
        enableAl=false;
        enableMa=false;
        btn1?.classList.remove('btn-active');
        btn1?.classList.add('btn-secondary');
        btn2?.classList.remove('btn-secondary');
        btn2?.classList.add('btn-active');
        btn3?.classList.remove('btn-active');
        btn3?.classList.add('btn-secondary');
        }else{
          enableMa=false;
          enableMe=false;
          btn1?.classList.remove('btn-active');
          btn1?.classList.add('btn-secondary');
          btn2?.classList.remove('btn-active');
          btn2?.classList.add('btn-secondary');
          btn3?.classList.remove('btn-secondary');
          btn3?.classList.add('btn-active');
        }
      }
  }
}
