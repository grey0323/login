import { Component, inject } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import {MatButtonModule} from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AccesoService } from '../../services/acceso.service';
import { Router } from '@angular/router';
import { Usuario } from '../../interfaces/usuario';


@Component({
  selector: 'app-registro',
  standalone: true,
 imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule],  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss'
})
export default class RegistroComponent {

  private acceso = inject(AccesoService)
    private router = inject(Router)
    public formBild = inject(FormBuilder)
  
    public formRegistro:FormGroup = this.formBild.group({
      nombre:["", Validators.required],
      correo:["", Validators.required],
      clave:["", Validators.required]
    })

    registrarse(){
      if(this.formRegistro.invalid) return;

      const objeto:Usuario = {
        nombre: this.formRegistro.value.nombre,
        correo: this.formRegistro.value.correo,
        clave: this.formRegistro.value.clave
      }

      this.acceso.registrarse(objeto).subscribe({
        next:data=>{
          if(data.isSuccess){
            this.router.navigate([""])
          }else{
            alert("No se pudo registrar")
          }
        }
      })
    }

    volver(){
      this.router.navigate([""])
    }


}
