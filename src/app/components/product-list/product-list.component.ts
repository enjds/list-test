import { Component, Input } from "@angular/core";
import { Product } from "src/app/models/Product";

@Component({
    selector: 'product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent {
    @Input() data: Product[];
}