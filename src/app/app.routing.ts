import { Routes, RouterModule } from '@angular/router';
import { PipesComponent } from './components/pipes/pipes.component';
import { DirectivasComponent } from './components/directivas/directivas.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';


const APP_ROUTES: Routes = [
    { path: 'pipes', component: PipesComponent },
    { path: 'directivas', component: DirectivasComponent },
    { path: 'ngSwitch', component: NgSwitchComponent },
    { path: '', pathMatch: 'full', redirectTo: 'pipes'},
    { path: '**', pathMatch: 'full', redirectTo: 'pipes'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);