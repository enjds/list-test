import { initialProductState, ProductState } from "./state/product.state";

export interface AppState {
    product: ProductState,
};

export const initialAppState: AppState = {
    product: initialProductState
};

export function getInitialAppState(): AppState {
    return initialAppState;
}