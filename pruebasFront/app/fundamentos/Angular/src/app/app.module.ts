import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ShowErrorsMessagesComponent } from './show-errors-messages/show-errors-messages.component';
import { ContactosModule} from './contactos';
@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    FormularioComponent,
    ShowErrorsMessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ContactosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
