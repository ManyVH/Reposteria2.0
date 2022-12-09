import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReportesComponent } from './reportes/reportes.component';
import { TicketsComponent } from './tickets/tickets.component';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'catalogo/:cabeza/:user', component: CatalogoComponent, pathMatch: 'full'},
  { path: 'reportes/:cabeza/:user', component: ReportesComponent, pathMatch: 'full'},
  { path: 'tickets/:cabeza/:user', component: TicketsComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
