import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Receta } from '../core/interfaces/receta';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {

  type = '';
  id = '';
  url = '';
  recetas: any;
  food: Receta | undefined;

  constructor(private route: ActivatedRoute, private http: HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.type = this.route.snapshot.params['type'];
    this.id = this.route.snapshot.params['id'];
    if (this.type === 'recetas'){
      this.url = 'http://localhost:4200/assets/data/recetas.json';
    }
    this.getReceta();
  }

  getReceta() {
    this.http.get(this.url).subscribe((receta) => {
      this.recetas = receta;
      let index = this.recetas.findIndex((food: { id: string }) => food.id == this.id);
      console.log(index);
      if (index > -1) {
        this.food = this.recetas[index];
        console.log(this.recetas[index].ingredientes)
      }
    });
  }

  modify(){
    this.router.navigate(['form', this.id]);
  }

}
