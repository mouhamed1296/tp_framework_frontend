import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveListComponent } from './active-list/active-list.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { HeaderComponent } from './header/header.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { SimpleUserComponent } from './simple-user/simple-user.component';
/* mais vues */
const routes: Routes = [
    {path:"admin", component: AdminUserComponent},
    {path: 'simple', component: SimpleUserComponent},
    {path: 'heroes-list', component: ActiveListComponent},
    {path:"", pathMatch: "full", component: ConnexionComponent},
    {path: 'inscrire', component: InscriptionComponent},
    {path: 'entete', component: HeaderComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
