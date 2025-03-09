import { Component, inject } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { ProductoService } from '../../services/producto.service';
import { Product } from '../../interfaces/producto';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  standalone: true,
imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule],  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export default class InicioComponent {

  private acceso = inject(ProductoService)
  public listaProducto:Product[] =[]

  public displayedColumns:string[] = ["nombre", "marca", "precio"]


  constructor() {
    this.acceso.list().subscribe({
      next:data=>{
        if(data.value.length>0){
          this.listaProducto = data.value
        }
      }
    })
  }
}
