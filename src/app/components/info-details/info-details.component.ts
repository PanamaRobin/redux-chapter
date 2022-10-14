import { Component, Input, OnInit } from '@angular/core';
import { ICharacterBody } from './../../store/view-detail/view-detail.models';

@Component({
  selector: 'app-info-details',
  templateUrl: './info-details.component.html',
  styleUrls: ['./info-details.component.scss'],
})
export class InfoDetailsComponent implements OnInit {
  @Input() character: ICharacterBody;
  constructor() {}

  ngOnInit() {}
}
