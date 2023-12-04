import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Persona } from 'src/app/domain/persona';
import { ContactosFirebaseService } from 'src/app/services/contactos-firebase.service';
import { ContactosService } from 'src/app/services/contactos.service';

@Component({
  selector: 'app-view-contacto',
  templateUrl: './view-contacto.component.html',
  styleUrls: ['./view-contacto.component.scss']
})
export class ViewContactoComponent {

  persona: Persona = new Persona();

  constructor(private router: Router,private contactoServices: ContactosService,

    
    
      private route: ActivatedRoute,
      private contactosFirebaseService: ContactosFirebaseService){

        this.route.params.subscribe(params => {
          console.log(params)
          if(params['id']){
            this.loadPersona(params['id'])
          }
        })

  }
  

  loadPersona(uid: string) {
    this.contactosFirebaseService.getPersona(uid).subscribe(data => {
      console.log(data)
      this.persona = <any> data
    })
  }

  Editar(){
    
  
    this.contactosFirebaseService.edit(this.persona)
    this.persona = new Persona();

    this.router.navigate(['paginas/lista'])
  }


  goDelete(Persona : Persona){
    this.contactosFirebaseService.delete(this.persona.uid)
    this.router.navigate(['paginas/lista'])
  }




  goListado(){
    this.router.navigate(['paginas/lista'])
  }
}


