import { createAction, props } from "@ngrx/store"
import { Product } from "src/app/models/Product";

const FEATURE_NAME = '[Product]'

export const getProduct$ = createAction(`${FEATURE_NAME} Get product details`, props<{id: string}>())
export const getProductSuccess$ = createAction(`${FEATURE_NAME} Get product details success`, props<{ productDetail: Product}>());
export const getProductFailure$ = createAction(`${FEATURE_NAME} Get product details failure`, props<{ error: any}>());

export const getProductList$ = createAction(`${FEATURE_NAME} Get product list`)
export const getProductListSuccess$ = createAction(`${FEATURE_NAME} Get product list success`, props<{ productList: Product[]}>());
export const getProductListFailure$ = createAction(`${FEATURE_NAME} Get product list failure`, props<{ error: any}>());