import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RickMortyService } from '../../services/rick-morty.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {
  public charactersList: [];
  constructor(
    private readonly rickMorty: RickMortyService,
    private readonly navController: NavController
  ) {}

  async ngOnInit(): Promise<void> {
    this.rickMorty.getCharacters().subscribe((response: any) => {
      this.charactersList = response.results;
      console.log(this.charactersList);
    });
  }

  selectedCharacter(character) {
    const state = {
      character,
    };
    this.navController.navigateForward(`/characters/info`, { state });
  }
}
