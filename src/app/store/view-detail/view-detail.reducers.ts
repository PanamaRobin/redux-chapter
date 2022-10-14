import { Action, createReducer, on } from '@ngrx/store';
import { ViewDetailState } from './view-detail.state';
import * as fromDetail from './view-detail.actions';

export const initialState: ViewDetailState = { detail: undefined };

const viewDetailReducerData = createReducer(
  initialState,
  on(fromDetail.setDetailSuccessAction, (state, { payload }) => ({
    ...state,
    detail: payload,
  })),
);

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function viewDetailReducer(state: ViewDetailState, action: Action) {
  return viewDetailReducerData(state, action);
}
