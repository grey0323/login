import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { appsetting } from '../settings/appsettings';
import { Usuario } from '../interfaces/usuario';
import { Observable } from 'rxjs';
import { ResponseAcceso } from '../interfaces/resposeAcceso';

@Injectable({
  providedIn: 'root'
})
export class AccesoService {

  private http= inject(HttpClient)
  private baseUrl:string = appsetting.apiUrl;
  constructor() { }

  registrarse(objeto:Usuario):Observable<ResponseAcceso>{
    return this.http.post<ResponseAcceso>(`${this.baseUrl}Acceso/Registrarse`, objeto)

  }

  login(objeto:Usuario):Observable<ResponseAcceso>{
    return this.http.post<ResponseAcceso>(`${this.baseUrl}Acceso/Login`, objeto)

  }
}
