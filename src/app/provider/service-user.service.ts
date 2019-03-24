import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceUserService {


  userNome = "";
  idUser = "";
  userNivel = "";
  userFoto = "";


  constructor() { }


  setUserNome(valor){
    this.userNome = valor;
  }

  getUserNome(){
    return this.userNome;
  }

  setUserId(valor){
    this.idUser = valor;
  }

  getUserId(){
    return this.idUser;
  }

  setUserNivel(valor){
    this.userNivel = valor;
  }

  getUserNivel(){
    return this.userNivel;
  }

  setUserFoto(valor){
    this.userFoto = valor;
  }

  getUserFoto(){
    return this.userFoto;
  }




}
