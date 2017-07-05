import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent} from './welcome/welcome.component';
import { HomeComponent} from './home/home.component';
import { MapcamasComponent } from './mapcamas/mapcamas.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
    { path: 'welcome', component: WelcomeComponent },
    { path: '', redirectTo:'/welcome', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: HomeComponent, children:[
        { path: 'mapcamas', component: MapcamasComponent },
        { path: 'dashboard', component: DashboardComponent }    
    ]},
    
];

export const Routing = RouterModule.forRoot(appRoutes);