import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { GlobalState } from 'src/app/store/store.config';
import { ICharacterBody } from 'src/app/store/view-detail/view-detail.models';
import { RickMortyService } from '../../services/rick-morty.service';
import * as fromViewDetail from '../../store/view-detail/view-detail.actions';
@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {
  public charactersList: [];
  constructor(
    private readonly rickMorty: RickMortyService,
    private readonly navController: NavController,
    private store: Store<GlobalState>
  ) {}

  async ngOnInit(): Promise<void> {
    this.rickMorty.getCharacters().subscribe((response: any) => {
      this.charactersList = response.results;
      console.log(this.charactersList);
    });
  }

  selectedCharacter(character) {
    const charr: ICharacterBody = character;
    this.store.dispatch(
      fromViewDetail.setDetailSuccessAction({ payload: charr })
    );

    const state = {
      character,
    };
    this.navController.navigateForward(`/characters/info`, { state });
  }
}
