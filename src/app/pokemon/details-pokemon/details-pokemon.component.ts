import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon-list';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-details-pokemon',
  templateUrl: './details-pokemon.component.html',

})
export class DetailsPokemonComponent implements OnInit {
  pokemonList: Pokemon[];
  currentPokemon?: Pokemon;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
   private pokemonService : PokemonService) {

  }
  ngOnInit() {
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');
    if (pokemonId) {
      this.pokemonService.getPokemonById(+pokemonId).
        subscribe(pokemon => this.currentPokemon = pokemon);

    }
  }

  goToPokemonList() {
    this.router.navigate(['pokemons']);
  }

  goToEditPokemon(pokemon: Pokemon) {

    this.router.navigate(['edit/pokemon', pokemon.id]);
  }
}
