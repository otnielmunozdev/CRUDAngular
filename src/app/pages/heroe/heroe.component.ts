import { Component, OnInit } from '@angular/core';
import { HeroeModel } from 'src/app/models/heroe.model';
import { NgForm } from '@angular/forms';
import { HeroesService } from 'src/app/services/heroes.service';
import Swal  from 'sweetalert2';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  //heroes: HeroeModel[]=[];



  heroe:HeroeModel = new HeroeModel();

  constructor(private heroesService:HeroesService,
              private route:ActivatedRoute) { 

  }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id'); //sin tener que suscribirse a los cambios del mismo
    
    
    if( id !== 'nuevo'){
      this.heroesService.getHeroe(id).subscribe((resp:HeroeModel)=>{
        this.heroe = resp;
        this.heroe.id = id;
        
      });
    }
  }

  guardar(form:NgForm){

    if(form.invalid){
      console.log("no valido");
      return;
      
    }


    Swal.fire({
      title: 'Espere',
      text: 'guardando informacion',
      type: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();


    let peticion:Observable<any>;

    if(this.heroe.id){

      peticion = this.heroesService.actualizarHeroe(this.heroe);

    }else{

     peticion =  this.heroesService.crearHeroe(this.heroe);
    }
    
    peticion.subscribe(resp=>{

      Swal.fire({
        title: this.heroe.nombre,
        text: 'se actualizo correctamente',
        type: 'success'
      });

    });


    
  }

}
