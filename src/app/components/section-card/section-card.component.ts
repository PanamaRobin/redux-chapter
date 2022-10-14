import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-section-card',
  templateUrl: './section-card.component.html',
  styleUrls: ['./section-card.component.scss'],
})
export class SectionCardComponent implements OnInit {
  @Input() public sections;
  @Output() public urlString = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  onClick(url: string) {
    this.urlString.emit(url);
  }
}
