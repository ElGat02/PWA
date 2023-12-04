import { Injectable } from '@angular/core';
import { Persona } from '../domain/persona';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  contatos:Persona[] = []

  constructor() { }

  addContacto(persona: Persona){
    this.contatos.push(persona)
  }

  eli(persona: Persona){
    this.contatos.indexOf(persona)
  }

  eliminar(persona: Persona) {
    const index = this.contatos.indexOf(persona);
    if (index !== -1) {
      this.contatos.splice(index, 1);
    }
  }

  

  

  getContactos(){
    return this.contatos
  }
}
