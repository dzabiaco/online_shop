import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private productServ: ProductService) { }

  @Input() product;

  ngOnInit(): void {
  }

  addProduct(product) {
    this.productServ.addProduct(product);
  }

}
