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

  // trendingMovies: any;
  // theatreMovies: any;
  // popularMovies: any;
  recetas:Receta;

  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    // this.getTrendingMovies();
    // this.getTheareMovies();
    // this.getPopularMovies();
    this.getReceta()
  }


  getReceta(){
      this.http.get('http://localhost:4200/assets/data/recetas.json').subscribe((food:Receta) => {
        // Obtengo los datos del json y los guardo en una variable
        this.recetas = food;
      });
    }

  //**Despues tengo que cambiarlo para que muestre comidas
  // getTrendingMovies(){
  //   this.http.get('http://localhost:4200/assets/data/trending-movies.json').subscribe((movies) => {
  //     // Obtengo los datos del json y los guardo en una variable
  //     this.trendingMovies = movies;
  //   });
  // }

  // getTheareMovies(){
  //   this.http.get('http://localhost:4200/assets/data/theatre-movies.json').subscribe((movies) => {
  //     // Obtengo los datos del json y los guardo en una variable
  //     this.theatreMovies = movies;
  //   });
  // }

  // getPopularMovies(){
  //   this.http.get('http://localhost:4200/assets/data/popular-movies.json').subscribe((movies) => {
  //     // Obtengo los datos del json y los guardo en una variable
  //     this.popularMovies = movies;
  //   });
  // }

  goToMovie(type: string, id: string){
    this.router.navigate(['food', type, id]);
  }
}
