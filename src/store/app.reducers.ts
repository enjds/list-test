import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "./app.states";
import { productReducers } from "./reducers";

export const appReducers: ActionReducerMap<AppState, any> = {
    product: productReducers
};