import { ActionReducerMap } from '@ngrx/store';
import { ViewDetailState } from './view-detail/view-detail.state';
import * as detailActions from './view-detail/view-detail.actions';
import { viewDetailReducer } from './view-detail/view-detail.reducers';

export interface GlobalState {
  detailState: ViewDetailState;
}

export const globalActions = {
    detailActions,
};

export const globalReducers: ActionReducerMap<any, any> = {
  detailState: viewDetailReducer,
};
