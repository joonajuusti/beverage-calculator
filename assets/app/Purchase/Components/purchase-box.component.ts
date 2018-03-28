import { Component, Input } from "@angular/core";

import { Purchase } from "../models/purchase";
import { PurchaseService } from "../Services/purchase.service";


@Component({
  selector: 'purchase-box',
  templateUrl: './purchase-box.component.html'
})
export class PurchaseBoxComponent {

  @Input() purchase: Purchase;

  constructor(private purchaseService: PurchaseService) {}

  onDelete() {
    this.purchaseService.deletePurchase(this.purchase)
    .subscribe(
      result => console.log(result)
    );
  }
}
