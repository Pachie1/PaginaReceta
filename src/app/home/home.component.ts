import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Receta } from '../core/interfaces/receta';
import { HomeserviceService } from '../services/homeservice.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  recetas:any;
  arrayFiltrado:any;
  mobil:boolean=false;
  animation1:boolean=true;
  enableAl:boolean=false;
  enableMe:boolean=false;
  enableMa:boolean=false;



  constructor(private http:HttpClient, private router:Router, private service:HomeserviceService) { }

  ngOnInit(): void {
    this.getReceta();
    if(window.screen.availWidth<=850){
      this.mobil=true;
    }
  }


  getReceta(){
      this.http.get('http://localhost:4200/assets/data/recetas.json').subscribe((food) => {
        this.recetas = food;
        this.arrayFiltrado = this.recetas;
      });
    }

  alfabetico(){
    this.arrayFiltrado.sort((a:any,b:any)=>{
      if(a.name > b.name){
          return 1;
      }
      if(a.name < b.name){
          return -1;
      }
      return 0;
    })
    if(this.animation1==false){
      this.animation1=true;
    }else{
      this.animation1=false
    }
    this.enableAl=true;
    this.enableMa=false;
    this.enableMe=false;
    this.service.cambiarColor(this.enableAl,this.enableMe,this.enableMa);
  }
  cPasosMenorMayor(){
    this.arrayFiltrado.sort((a:any,b:any)=>a.cPasos-b.cPasos);
    if(this.animation1==false){
      this.animation1=true;
    }else{
      this.animation1=false
    }
    this.enableAl=false;
    this.enableMe=true;
    this.enableMa=false;
    this.service.cambiarColor(this.enableAl,this.enableMe,this.enableMa);
  }
  cPasosMayorMenor(){
    this.arrayFiltrado.sort((a:any,b:any)=>b.cPasos-a.cPasos);
    if(this.animation1==false){
      this.animation1=true;
    }else{
      this.animation1=false
    }
    this.enableAl=false;
    this.enableMe=false;
    this.enableMa=true;
    this.service.cambiarColor(this.enableAl,this.enableMe,this.enableMa);
  }

  goToMovie(type: string, id: string){
    this.router.navigate(['food', type, id]);
  }

  gotoForm(){
    this.router.navigate(['form/-1']);
  }

  lista(){
    if(this.mobil==true){
      this.mobil=false
    }else{
      this.mobil=true
    }
  }

  detectInput(input:any){
    this.arrayFiltrado = this.service.filtrarArray(input,this.recetas);
  }
}
