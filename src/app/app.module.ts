 import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { SimpleUserComponent } from './simple-user/simple-user.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { HeaderComponent } from './header/header.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ArchiveListComponent } from './archive-list/archive-list.component';
import { ActiveListComponent } from './active-list/active-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminUserComponent,
    SimpleUserComponent,
    InscriptionComponent,
    ConnexionComponent,
    HeaderComponent,
    PaginationComponent,
    ArchiveListComponent,
    ActiveListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 

