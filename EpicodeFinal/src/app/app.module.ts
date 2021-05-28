import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// component menu
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UtentiComponent } from './utenti/utenti.component';
import { ClientiComponent } from './clienti/clienti.component';
import { FattureComponent } from './fatture/fatture.component';
import { HomeComponent } from './home/home.component';
// component clienti
import { ModificaComponent } from './clienti/modifica/modifica.component';
import { EliminaComponent } from './clienti/elimina/elimina.component';
//component fatture
import { ModificaFattureComponent } from './fatture/modifica-fatture/modifica-fatture.component';
import { NuovaFatturaComponent } from './fatture/nuova-fattura/nuova-fattura.component';
import { EliminaFatturaComponent } from './fatture/elimina-fattura/elimina-fattura.component';
import { FattureClienteComponent } from './clienti/fatture-cliente/fatture-cliente.component';
import { NuovoClienteComponent } from './clienti/nuovo-cliente/nuovo-cliente.component';
import { ModificaSingolaFatturaComponent } from './clienti/fatture-cliente/modifica-singola-fattura/modifica-singola-fattura.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    UtentiComponent,
    ClientiComponent,
    FattureComponent,
    HomeComponent,
    ModificaComponent,
    EliminaComponent,
    ModificaFattureComponent,
    NuovaFatturaComponent,
    EliminaFatturaComponent,
    FattureClienteComponent,
    NuovoClienteComponent,
    ModificaSingolaFatturaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
