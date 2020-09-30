import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../usuario';
import { UsuarioService } from '../../usuario.service';


@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.css']
})
export class UsuarioCadastroComponent implements OnInit {

  public usuario:Usuario = new Usuario()
  constructor(private usuarioService:UsuarioService) { }

  ngOnInit() {
  }
  public salvar(){
    this.usuarioService.salvar(this.usuario).subscribe(
      response => {
        alert("Salvo com sucesso!")
      }, error => {
        alert("Aconteceu um error!")
      }
    )
  }
}
