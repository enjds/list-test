import { Action, createReducer, on } from "@ngrx/store"
import { initialProductState, ProductState } from "../state/product.state";

import * as ProductActions from '../actions'

const productReducer = createReducer(
    initialProductState,
    /** GET PRODUCT DETAILS */
    on(ProductActions.getProduct$, (state) => ({
        ...state,
        error: null
    })),
    on(ProductActions.getProductSuccess$, (state, { productDetail }) => ({
        ...state,
        productDetail,
        error: null
    })),
    on(ProductActions.getProductFailure$, (state, { error }) => ({
        ...state,
         error
    })),

    /** GET PRODUCT LIST */
    on(ProductActions.getProductList$, (state) => ({
        ...state,
        error: null
    })),
    on(ProductActions.getProductListSuccess$, (state, { productList }) => ({
        ...state,
        productList,
        error: null
    })),
    on(ProductActions.getProductListFailure$, (state, { error }) => ({
        ...state,
         error
    })),

);

export function productReducers(state: ProductState | undefined, action: Action) {
    return productReducer(state, action)
}