import { createAction, props } from '@ngrx/store';
import { IViewDetail } from './view-detail.models';

export const TYPE_ACTION = {
  getDetail: '[GET] view detail',
  setDetail: '[SET] view detail',
};

export const getDetailSuccessAction = createAction(
  TYPE_ACTION.getDetail,
  props<{ payload: IViewDetail }>()
);

export const setDetailSuccessAction = createAction(
  TYPE_ACTION.setDetail,
  props<{ payload: IViewDetail }>()
);
