import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormService } from '../services/form.service';


@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.scss']
})
export class FormAddComponent implements OnInit {

  nombre: string ="";
  ingredientes: string ="";
  pasos: string ="";
  id = '';
  add = false;
  receta:any;
  constructor(private route: ActivatedRoute, private http: HttpClient, private router:Router, private service:FormService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if(this.id == '-1'){
      this.add=true;
      console.log('Formulario en modo add: ',this.add);
    }else{
      this.add=false;
      console.log('Formulario en modo add: ',this.add);
      this.receta = this.service.encontrarReceta(this.id);
      console.log(this.receta);
      this.nombre=this.receta.name;
      this.ingredientes=this.receta.ingredientes;
      this.pasos=this.receta.pasos;
    }
  }

  enviar(){
    if (this.nombre != ""){
      if (this.nombre.includes('.') ||this.nombre.includes('/') ||this.nombre.includes('&') ||this.nombre.includes('*') || this.nombre.includes('+') ||this.nombre.includes('-') ||this.nombre.includes(';') ||this.nombre.includes('!')){
        console.log('Formato invalido en Nombre');
        document.getElementById('lNombre')?.classList.add('alert-danger');
      }else{
        document.getElementById('lNombre')?.classList.remove('alert-danger');
      }
    }

    if (this.ingredientes != ""){
      if (this.ingredientes.includes('.') == false && this.ingredientes.includes('\n')){
        console.log('Formato invalido en Ingredientes');
        document.getElementById('lIngre')?.classList.add('alert-danger');
      }else{
        if(this.ingredientes.includes('.') == false){
          console.log('Formato invalido en Ingredientes');
          document.getElementById('lIngre')?.classList.add('alert-danger');
        }else{
          let arrayIngredientes = this.ingredientes.split('.\n');
          document.getElementById('lIngre')?.classList.remove('alert-danger');
          console.log(this.nombre);
          console.log(arrayIngredientes);
          console.log(this.pasos);
        }
      }
    }

    if(this.pasos != ""){
      if (this.pasos.includes('.') == false && this.pasos.includes('\n')){
        console.log('Formato invalido en Pasos');
        document.getElementById('lPasos')?.classList.add('alert-danger');
      }else{
        if(this.pasos.includes('.') == false){
          console.log('Formato invalido en Pasos');
          document.getElementById('lPasos')?.classList.add('alert-danger');
        }else{
          let arrayPasos = this.pasos.split('.\n');
          document.getElementById('lPasos')?.classList.remove('alert-danger');
          console.log(this.nombre);
          console.log(arrayPasos);
          console.log(this.pasos);
        }
      }
    }

  }
}
