import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ViewDetailState } from '../../../store/view-detail/view-detail.state';
import { GlobalState } from '../../../store/store.config';
import { ICharacterBody } from './../../../store/view-detail/view-detail.models';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
  public character: ICharacterBody;
  private avatarInfo$: Observable<ViewDetailState>;

  // private readonly router: Router,
  constructor(
    private readonly navController: NavController,
    private readonly store: Store<GlobalState>
  ) {
    this.avatarInfo$ = this.store.select('detailState');
  }

  ngOnInit() {
    // if (!state) { // const state = this.router.getCurrentNavigation().extras?.state;
    //   this.navController.navigateRoot('/characters');
    // }
    // this.character = state.character;
    // .console
    //   .log(this.character);
    this.avatarInfo$.subscribe((avatar) => {
      console.log(avatar);
      if (!avatar) {
        this.navController.navigateRoot('/characters');
      }
      this.character = avatar.detail;
    });
  }
}
