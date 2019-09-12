import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//rutas 
import { AppRoutingModule } from './app-routing.module';

//formulario
import { FormsModule } from '@angular/forms';


//peticiones
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HeroesComponent } from './pages/heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroeComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
