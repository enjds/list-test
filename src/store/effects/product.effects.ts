import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductService } from "src/app/services/product.service";
import { catchError, mergeMap, map, tap } from "rxjs/operators";
import { of } from "rxjs";

import * as ProductActions from "../actions";

@Injectable()
export class ProductEffects {
    constructor(private actions$: Actions, private productSvc: ProductService) {}

    getProduct$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ProductActions.getProduct$),
            mergeMap(action => {
                return this.productSvc.getProductById(action.id).pipe(
                    map(product => ProductActions.getProductSuccess$({ productDetail: product })),
                    catchError(error => of(ProductActions.getProductFailure$({ error })))
                );
            })
        );
    });

    getProductSuccess$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ProductActions.getProductSuccess$),
            tap(action => {
                console.debug('Product retrieved successfully');
            })
        );
    }, { dispatch: false });

    getProductFailure$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ProductActions.getProductFailure$),
            tap(action => {
                console.debug('Product not retrieved');
            })
        );
    }, { dispatch: false });

    getProductList$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ProductActions.getProductList$),
            mergeMap(action => {
                return this.productSvc.getAll().pipe(
                    map(products => ProductActions.getProductListSuccess$({ productList: products})),
                    catchError(error => of(ProductActions.getProductListFailure$({ error })))
                );
            })
        );
    });

    getProductListSuccess$ = createEffect(() =>  {
        return this.actions$.pipe(
            ofType(ProductActions.getProductListSuccess$),
            tap(action => {
                console.debug('Product list retrieved successfully');
            })
        );
    }, { dispatch: false });

    getProductListFailure$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ProductActions.getProductListFailure$),
            tap(action => {
                console.debug('Product list not retrieved');
            })
        );
    }, { dispatch: false });
}