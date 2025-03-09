import { Routes } from '@angular/router';
import { authGuard } from '../custom/auth.guard';

export const routes: Routes = [

    {path:"", loadComponent: ()=> import("../pages/login/login.component")},
    {path:"registro", loadComponent: ()=> import("../pages/registro/registro.component")},
    {path:"inicio", loadComponent: ()=> import("../pages/inicio/inicio.component"), canActivate:[authGuard]}
    
];
