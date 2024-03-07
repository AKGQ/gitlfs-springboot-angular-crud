import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostClienteComponent } from './components/post-cliente/post-cliente.component';
import { GetAllClientesComponent } from './components/get-all-clientes/get-all-clientes.component';
import { UpdateClienteComponent } from './components/update-cliente/update-cliente.component';

const routes: Routes = [
  { path: "cliente", component: PostClienteComponent },
  { path: "", component: GetAllClientesComponent },
  { path: "cliente/:id", component: UpdateClienteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
