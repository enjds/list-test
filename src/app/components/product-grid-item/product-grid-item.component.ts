import { Component, Input } from "@angular/core";
import { Product } from "src/app/models/Product";

@Component({
    selector: 'product-grid-item',
    templateUrl: './product-grid-item.component.html',
    styleUrls: ['./product-grid-item.component.scss']
})

export class ProductGridItemComponent {
    @Input() item: Product;
}