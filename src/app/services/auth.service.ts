import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { loginInfo } from '../core/interfaces/loginInfo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private http:HttpClient) { }
  username:string | undefined;
  password:string | undefined;
  getUserInfo(){
    this.http.get('http://localhost:4200/assets/data/login.mook.json').subscribe((lInfo:any) => {
      this.username=lInfo.username;
      this.password=lInfo.password;
    });

  }
  login(uname: string, pword: string){
    if (uname === this.username && pword === this.password){
      return 200;
    } else {
      return 403;
    }
  }
  loguot(){
    this.router.navigate(['login']);
  }
}
