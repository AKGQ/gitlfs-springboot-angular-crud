import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetAllClientesComponent } from './components/get-all-clientes/get-all-clientes.component';
import { PostClienteComponent } from './components/post-cliente/post-cliente.component';
import { UpdateClienteComponent } from './components/update-cliente/update-cliente.component';
import { HttpClientModule } from "@angular/common/http"; //Use Http
import { ReactiveFormsModule, FormsModule } from "@angular/forms"; //Form management

@NgModule({
  declarations: [
    AppComponent,
    GetAllClientesComponent,
    PostClienteComponent,
    UpdateClienteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
