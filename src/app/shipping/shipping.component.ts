import { CartService } from './../cart.service';
import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent  implements OnInit{
  shippingCost!: Observable<{type: string, price: number}[]>

  constructor(private cartService: CartService){}
  ngOnInit(): void {
    this.shippingCost = this.cartService.getShippingPrices();
  }
}
