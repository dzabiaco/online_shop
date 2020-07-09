import { Subscription } from 'rxjs';
import { OrderService } from './../../shared/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.scss']
})
export class OrdersPageComponent implements OnInit {

  constructor(private orderServ: OrderService) { }
  orders = [];
  pSub: Subscription;
  rSub: Subscription;

  ngOnInit(): void {
    this.rSub = this.orderServ.getAll().subscribe(orders => {
      this.orders = orders;
    })
  }

  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe();
    }

    if (this.rSub) {
      this.rSub.unsubscribe();
    }
  }

  remove(id) {
    this.rSub = this.orderServ.remove(id).subscribe(() => {
      this.orders = this.orders.filter(order => order.id !== id)
    })
  }

}
