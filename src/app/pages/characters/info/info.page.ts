import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
  public character: {};
  constructor(
    private readonly router: Router,
    private readonly navController: NavController
  ) {}

  ngOnInit() {
    const state = this.router.getCurrentNavigation().extras?.state;
    if (!state) {
      this.navController.navigateRoot('/characters');
    }
    this.character = state.character;
    console.log(this.character);
  }
}
