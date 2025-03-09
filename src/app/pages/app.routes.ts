import { Routes } from '@angular/router';

export const routes: Routes = [

    {path:"", loadComponent: ()=> import("../pages/login/login.component")},
    {path:"registro", loadComponent: ()=> import("../pages/registro/registro.component")},
    {path:"inicio", loadComponent: ()=> import("../pages/inicio/inicio.component")}
    
];
