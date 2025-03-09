import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:"", loadChildren: () => import("../app/pages/app.routes").then(x=> x.routes)}
];
