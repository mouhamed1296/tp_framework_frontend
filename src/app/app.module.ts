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
import { ArchiveListComponent } from './archive-list/archive-list.component';
import { ActiveListComponent } from './active-list/active-list.component';
import { SampleComponent } from './sample/sample.component';
import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select.component';
import { ModificationComponent } from './modification/modification.component';




@NgModule({
  declarations: [
  InputComponent,
  SelectComponent,
    AppComponent,
    AdminUserComponent,
    SimpleUserComponent,
    InscriptionComponent,
    ConnexionComponent,
    HeaderComponent,
    ArchiveListComponent,
    ActiveListComponent,
    SampleComponent,
    ModificationComponent
  ],
  imports: [
    ReactiveFormsModule ,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


