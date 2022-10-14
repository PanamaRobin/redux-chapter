import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  sections = [
    {
      id: 1,
      name: 'Characters',
      content: 'Lista de personajes',
      url: '/characters',
    },
    {
      id: 2,
      name: 'Locations',
      content: 'Lista de ubicaciones',
      url: '/characters',
    },
    {
      id: 3,
      name: 'Episodes',
      content: 'Lista de episodios',
      url: '/characters',
    },
  ];
  constructor(private readonly navController: NavController) {}

  handleSelection(url: string) {
    console.log(url);
    this.navController.navigateForward(`${url}`);
  }
}
