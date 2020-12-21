import { Component, Input } from "@angular/core";
import { Product } from "src/app/models/Product";

@Component({
    selector: 'product-grid',
    templateUrl: './product-grid.component.html',
    styleUrls: ['./product-grid.component.scss']
})

export class ProductGridComponent {
    @Input() data: Product[];
}