import { createAction, props } from '@ngrx/store';
import { ICharacterBody } from './view-detail.models';

export const TYPE_ACTION = {
  getDetail: '[GET] view detail',
  setDetail: '[SET] view detail',
};

export const getDetailSuccessAction = createAction(
  TYPE_ACTION.getDetail,
  props<{ payload: ICharacterBody }>()
);

export const setDetailSuccessAction = createAction(
  TYPE_ACTION.setDetail,
  props<{ payload: ICharacterBody }>()
);
