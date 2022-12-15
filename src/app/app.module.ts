 import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { SimpleUserComponent } from './simple-user/simple-user.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { HeaderComponent } from './header/header.component';
import { ArchiveListComponent } from './archive-list/archive-list.component';
import { ActiveListComponent } from './active-list/active-list.component';

import { SelectComponent } from './select/select.component';
import { ModificationComponent } from './modification/modification.component';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { FilterActivePipe } from './filter-active.pipe';
import { PaginationComponent } from './pagination/pagination.component';
import { SearchPipe } from './search.pipe';
import { FilterInactivePipe } from './filter-inactive.pipe';
import { SearchInactifPipe } from './search-inactif.pipe';
import { InscriptionComponent } from './inscription/inscription.component';
import { InputComponent } from './input/input.component';




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
    ModificationComponent,
    InputComponent,
    SelectComponent,
    FilterActivePipe,
    PaginationComponent,
    SearchPipe,
    FilterInactivePipe,
    SearchInactifPipe
  ],
  imports: [
    ReactiveFormsModule ,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }

 }


