import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = environment.host + "usuario"
  constructor(private http:HttpClient) { }
  
  public salvar(usuario:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(this.url, usuario)
  }
  public delete(id:string):Observable<any>{
    return this.http.delete<any>(this.url + "/" + id)
  }

  public getUsuario(): Usuario {
    let usuario = new Usuario()
    usuario.nome = "Renata"
    usuario.email = "re@gmail.com"

    return usuario
  }
  public listaUsuario():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.url)
  }
}
