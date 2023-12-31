
import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'
import { Persona } from '../domain/persona';

@Injectable({
  providedIn: 'root'
})
export class ContactosFirebaseService {

  private path = '/contactos'

  contactosRef: AngularFirestoreCollection<any>

  constructor(private db: AngularFirestore) { 
    this.contactosRef = db.collection(this.path)

    this.contactosRef.valueChanges().subscribe(data => {
      console.log(data)
    })
  }

  getAll(){
    return this.contactosRef.valueChanges()
  }

  eliminar(uid: string) {
    this.db.doc(this.path+'/'+uid).delete()
      .then(() => {
        console.log('Campo eliminado correctamente');
      })
      .catch(error => {
        console.error('Error al eliminar campo:', error);
      });
  }

  save(persona: Persona){
    
    const uid = this.db.createId()
    persona.uid = uid
    console.log('Nota', persona)
    return this.contactosRef.doc(uid).set(Object.assign({}, persona))
    
  }
  edit(persona: Persona){
    (persona.uid)

      return this.contactosRef.doc(persona.uid).update(Object.assign({}, persona))
    }

    delete(uid : any){
      return this.contactosRef.doc(uid).delete();
    }
    

  getPersona(uid: string){
    console.log('uid', uid)
    return this.db.doc(this.path+'/'+uid).valueChanges()
  }
}
