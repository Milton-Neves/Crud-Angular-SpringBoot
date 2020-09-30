import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './usuario.component';
import { UsuarioCadastroComponent } from '../cadastro/usuario-cadastro/usuario-cadastro.component';

const routes: Routes = [
  {
    path: '', 
   component: UsuarioComponent
  },
  {
    path: 'add', 
   component: UsuarioCadastroComponent
  },
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[ RouterModule]
})
export class UsuarioRoutingModule { }
