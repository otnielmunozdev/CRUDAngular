import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { HeroeModel } from 'src/app/models/heroe.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: HeroeModel[]=[];
  cargando = false;

  constructor(private heroesService:HeroesService) {

   }

  ngOnInit() {

    this.cargando = true;

      this.heroesService.getHeroes().subscribe(resp=>{
        this.heroes = resp;
        this.cargando = false;
      });

  }

  borrarHeroe(heroe:HeroeModel,i:number){

    Swal.fire({
      title: 'Estas seguro?',
      text: `Esta seguro que desea borrar a ${heroe.nombre}`,
      type: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then(resp=>{ //bo==obtener respuesta

        if (resp.value) { //si es true
          this.heroes.splice(i,1); //solo borro uno en la posicion 1
          this.heroesService.borrarHeroe(heroe.id).subscribe();
        }
          
    });

    
  }

}
