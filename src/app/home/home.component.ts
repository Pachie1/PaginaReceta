import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Receta } from '../core/interfaces/receta';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  recetas:any;
  mobil:boolean=false;
  animation1:boolean=true;
  enableAl:string='true';
  enableMe:string='true';
  enableMa:string='true';


  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.getReceta()
    if(window.screen.availWidth<=850){
      this.mobil=true;
    }
  }


  getReceta(){
      this.http.get('http://localhost:4200/assets/data/recetas.json').subscribe((food) => {
        this.recetas = food;
      });
    }

  alfabetico(){
    this.recetas.sort((a:any,b:any)=>{
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
    this.enableAl='true';
    this.enableMa='false';
    this.enableMe='false';
    console.log("enableAl  :",this.enableAl);
    console.log("enableMa  :",this.enableMa);
    console.log("enableMe  :",this.enableMe);
    console.log("----o----");
  }
  cPasosMenorMayor(){
    this.recetas.sort((a:any,b:any)=>a.cPasos-b.cPasos);
    if(this.animation1==false){
      this.animation1=true;
    }else{
      this.animation1=false
    }
    this.enableAl='false';
    this.enableMa='true';
    this.enableMe='false';
    console.log("enableAl  :",this.enableAl);
    console.log("enableMa  :",this.enableMa);
    console.log("enableMe  :",this.enableMe);
    console.log("----o----");
  }
  cPasosMayorMenor(){
    this.recetas.sort((a:any,b:any)=>b.cPasos-a.cPasos);
    if(this.animation1==false){
      this.animation1=true;
    }else{
      this.animation1=false
    }
    this.enableAl='false';
    this.enableMa='false';
    this.enableMe='true';
    console.log("enableAl  :",this.enableAl);
    console.log("enableMa  :",this.enableMa);
    console.log("enableMe  :",this.enableMe);
    console.log("----o----");
  }

  goToMovie(type: string, id: string){
    this.router.navigate(['food', type, id]);
  }

  lista(){
    if(this.mobil==true){
      this.mobil=false
    }else{
      this.mobil=true
    }
  }
}
