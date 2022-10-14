import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-details',
  templateUrl: './info-details.component.html',
  styleUrls: ['./info-details.component.scss'],
})
export class InfoDetailsComponent implements OnInit {
  @Input() character: {};
  constructor() {}

  ngOnInit() {}
}
