<<<<<<< HEAD
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
=======
 import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
>>>>>>> dev
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { SimpleUserComponent } from './simple-user/simple-user.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { HeaderComponent } from './header/header.component';
import { ArchiveListComponent } from './archive-list/archive-list.component';
import { ActiveListComponent } from './active-list/active-list.component';
<<<<<<< HEAD
import { CostumerrorDirective } from './costumerror.directive';
import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select.component';
=======
import { SampleComponent } from './sample/sample.component';



>>>>>>> dev

@NgModule({
  declarations: [
    AppComponent,
    AdminUserComponent,
    SimpleUserComponent,
    InscriptionComponent,
    ConnexionComponent,
    HeaderComponent,
    ArchiveListComponent,
    ActiveListComponent,
<<<<<<< HEAD
    CostumerrorDirective,
    InputComponent,
    SelectComponent
=======
    SampleComponent
>>>>>>> dev
  ],
  imports: [
    ReactiveFormsModule ,
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    ReactiveFormsModule
=======
    // FormGroup
>>>>>>> dev
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


