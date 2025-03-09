import { inject, Injectable } from '@angular/core';
import { appsetting } from '../settings/appsettings';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseAcceso } from '../interfaces/resposeAcceso';
import { ResponseProducto } from '../interfaces/ResponseProducto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

   private http= inject(HttpClient)
    private baseUrl:string = appsetting.apiUrl;
  constructor() { }

   list():Observable<ResponseProducto>{
      return this.http.get<ResponseProducto >(`${this.baseUrl}Producto/lista`)
  
    }
}
