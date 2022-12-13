import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveListComponent } from './active-list/active-list.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { SimpleUserComponent } from './simple-user/simple-user.component';
import { ArchiveListComponent} from './archive-list/archive-list.component';
import { ModificationComponent } from './modification/modification.component';
/* mais vues */
import './archive-list/archive-list.component.css';
const routes: Routes = [
    {path:"admin", component: AdminUserComponent},
    {path: 'simple', component: SimpleUserComponent},
    {path: 'active-list', component: ActiveListComponent},
    {path:"", pathMatch: "full", component: ConnexionComponent},
    {path: 'inscrire', component: InscriptionComponent},
    {path: 'archive', component: ArchiveListComponent},
    {path: 'modif', component: ModificationComponent},
    {path: 'connexion', component: ConnexionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
