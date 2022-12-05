import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { SimpleUserComponent } from './simple-user/simple-user.component';
import { SampleComponent } from './sample/sample.component';

const routes: Routes = [
    {path:"admin", component: AdminUserComponent},
    {path: 'simple', component: SimpleUserComponent},
    {path:"", pathMatch: "full", component: ConnexionComponent},
    {path: 'inscription', component: InscriptionComponent},
    {path: 'sample', component: SampleComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
