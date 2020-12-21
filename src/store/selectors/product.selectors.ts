import { createSelector } from "@ngrx/store";
import { AppState } from "../app.states";
import { ProductState } from "../state";

const productState = (state: AppState) => state.product
export const selectProduct = createSelector(
    productState, (state: ProductState) => state.productDetails
);

export const selectProductList = createSelector(
    productState, (state: ProductState) => state.productList
);
