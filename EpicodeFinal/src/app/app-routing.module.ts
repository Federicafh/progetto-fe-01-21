import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component Menù
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UtentiComponent } from './utenti/utenti.component';
import { ClientiComponent } from './clienti/clienti.component';
import { FattureComponent } from './fatture/fatture.component';
// Component clienti
import { ModificaComponent } from './clienti/modifica/modifica.component';
import { FattureClienteComponent } from './clienti/fatture-cliente/fatture-cliente.component';
import { NuovoClienteComponent } from './clienti/nuovo-cliente/nuovo-cliente.component';
////////////component in clienti
import { ModificaSingolaFatturaComponent } from './clienti/fatture-cliente/modifica-singola-fattura/modifica-singola-fattura.component';
// Component fatture
import { NuovaFatturaComponent } from './fatture/nuova-fattura/nuova-fattura.component';
import { ModificaFattureComponent } from './fatture/modifica-fatture/modifica-fatture.component';
import { EliminaFatturaComponent } from './fatture/elimina-fattura/elimina-fattura.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'utenti', component: UtentiComponent },
  { path: 'clienti', component: ClientiComponent },
  { path: 'fatture', component: FattureComponent },
// routes clienti
  { path: 'modificaCliente/:id', component: ModificaComponent},
  { path: 'fattureCliente/:id', component: FattureClienteComponent},
  { path: 'modificaSingolaFattura/:id', component: ModificaSingolaFatturaComponent },
  { path: 'nuovoCliente', component: NuovoClienteComponent},
// route fatture
{ path: ':idCliente/nuovaFattura', component: NuovaFatturaComponent },
{ path: 'modificaFattura/:id', component: ModificaFattureComponent },
{ path: 'eliminaFattura', component: EliminaFatturaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
