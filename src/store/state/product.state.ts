import { Product } from "src/app/models/Product";
export interface ProductState {
    productDetails: Product,
    productList: Product[]
}
export const initialProductState: ProductState = {
    productDetails: null,
    productList: []
}
