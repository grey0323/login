import { Component, inject } from '@angular/core';
import { AccesoService } from '../../services/acceso.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Login } from '../../interfaces/login';
import { Usuario } from '../../interfaces/usuario';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export default class LoginComponent {

  private acceso = inject(AccesoService)
  private router = inject(Router)
  public formBild = inject(FormBuilder)

  public formlogin:FormGroup = this.formBild.group({
    correo:["", Validators.required],
    clave:["", Validators.required]
  })

  iniciarSesion(){
    if(this.formlogin.invalid)return;

    const objeto:Login ={
      correo: this.formlogin.value.correo,
      clave: this.formlogin.value.clave
    }

    this.acceso.login(objeto as Usuario).subscribe({
      next: data=>{
        if(data.isSuccess){
          localStorage.setItem("token", data.token)
          this.router.navigate(["inicio"])
        }else{
          alert("Credentials Incorret")
        }
      }
    })
  }

  registrarse(){
    this.router.navigate(["registro"])

  }
}
