import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProductGridComponent } from "./product-grid/product-grid.component";
import { ProductGridItemComponent } from "./product-grid-item/product-grid-item.component";
import { ProductListItemComponent } from "./product-list-item/product-list-item.component";
import { ProductListComponent } from "./product-list/product-list.component";

@NgModule({
    imports: [CommonModule],
    declarations: [ ProductListItemComponent, ProductGridComponent, ProductGridItemComponent, ProductListComponent ],
    exports: [ ProductListComponent, ProductGridComponent ]
})
export class ComponentsModule {}