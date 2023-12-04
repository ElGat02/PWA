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
    
  
    this.contactosFirebaseService.save(this.persona)
    this.persona = new Persona();
  }

  Eliminar(){
    
  
    this.contactosFirebaseService.savee(this.persona)
    this.persona = new Persona();
  }




  editarr(contacto: Persona ){
    console.log("editando", contacto)

    let params: NavigationExtras = {
      queryParams: {
        contacto: contacto
      }
    }

    

    this.router.navigate(['paginas/lista'], params)
  }


  goListado(){
    this.router.navigate(['paginas/lista'])
  }
}


