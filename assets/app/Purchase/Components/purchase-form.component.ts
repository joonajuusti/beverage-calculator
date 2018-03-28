import { Component } from "@angular/core";
import { NgForm } from '@angular/forms';

import { Purchase } from "../Models/purchase";
import { PurchaseService } from '../Services/purchase.service';

@Component({
  selector: 'purchase-form',
  templateUrl: './purchase-form.component.html',
})
export class PurchaseFormComponent {
  constructor(private purchaseService: PurchaseService) {

  }

  submitPurchase(form: NgForm) {
    const purchase = new Purchase(
      form.value.store,
      new Date(form.value.date),
      form.value.pepsiAmountInLitres,
      form.value.pepsiPriceInPurchase,
      form.value.monsterAmountInCans,
      form.value.monsterPricePerCan);
    this.purchaseService.addPurchase(purchase)
      .subscribe(
        data => console.log(data),
        error => console.error(error)
      );
    form.resetForm();
  }

  clear(form: NgForm) {
    form.resetForm();
  }
}
