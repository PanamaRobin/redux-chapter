import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GlobalState } from './store/store.config';
import { ViewDetailState } from './store/view-detail/view-detail.state';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  private lastView$: Observable<ViewDetailState>
  constructor(
    private store: Store<GlobalState>
  ) {
    this.lastView$ = this.store.select('detailState')
  }

  ngOnInit(): void {
      this.lastView$.subscribe((last) => {
        console.log({last})
      })
  }
}
