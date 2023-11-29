import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ListaContactosComponent } from './pages/lista/lista-contactos.component';
import { ViewContactoComponent } from './pages/view-contacto/view-contacto.component';

const routes: Routes = [

  {path:"paginas/contacto", component: ContactoComponent},
  {path:"paginas/contacto/:id", component: ViewContactoComponent},
  {path:"paginas/lista", component: ListaContactosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
