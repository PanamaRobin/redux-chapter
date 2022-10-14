import { Component, Input, OnInit } from '@angular/core';
import { ICharacterBody } from './../../store/view-detail/view-detail.models';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
})
export class InfoCardComponent implements OnInit {
  @Input() character: ICharacterBody;
  constructor() {}

  ngOnInit() {}
}
