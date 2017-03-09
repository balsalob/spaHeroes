import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

   heroes:Heroe[] = [];
   termino:string;

  constructor(private _heroesService:HeroesService,
              private activatedRoute: ActivatedRoute,) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params =>{
      this.termino = params['id'];
      this.heroes = this._heroesService.buscarHeroes(this.termino);
    });

  }

}
