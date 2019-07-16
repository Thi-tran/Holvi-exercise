import { DriverComponent } from './standing/driver/driver.component';
import { ListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StandingComponent } from './standing/standing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CreditsComponent } from './credits/credits.component';


const routes: Routes = [
  {path: '', redirectTo: '/list', pathMatch: 'full'},
  {path: 'credits', component: CreditsComponent},
  {path: 'list', component: ListComponent},
  {path: 'standing', component: StandingComponent},
  {path: 'driver/:id', component: DriverComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
