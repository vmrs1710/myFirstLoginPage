import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [

     //default route
     { path: '', redirectTo: 'login', pathMatch: 'full' },
     { path: 'login', component: LoginComponent },


     { path: '', component:LayoutComponent, 
     children: [
       {path:'dashboard', component: DashboardComponent}
     ]
},


     { path: '**', component: LoginComponent },  // Wildcard route for a 404 page in case of an error, it will go to login page again

];
