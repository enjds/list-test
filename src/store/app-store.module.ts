import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { ProductService } from "src/app/services/product.service";

import { appReducers } from './app.reducers';
import { appEffects } from './effects';

@NgModule({
    imports: [
        StoreModule.forRoot(appReducers),
        EffectsModule.forRoot(appEffects)
    ],
    providers: [ProductService]
})
export class AppStoreModule {}