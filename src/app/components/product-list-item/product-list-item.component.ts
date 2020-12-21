import { Component, Input } from "@angular/core";
import { Product } from "src/app/models/Product";

@Component({
    selector: 'product-list-item',
    templateUrl: './product-list-item.component.html',
    styleUrls: ['./product-list-item.component.scss']
})

export class ProductListItemComponent {
    @Input() item: Product;
}