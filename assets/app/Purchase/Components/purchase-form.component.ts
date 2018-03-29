import { Component, OnInit } from "@angular/core";
import { NgForm } from '@angular/forms';

import { Purchase } from "../Models/purchase";
import { PurchaseService } from '../Services/purchase.service';
import { StoreService } from '../Services/store.service';

@Component({
  selector: 'purchase-form',
  templateUrl: './purchase-form.component.html',
  styles:[`
    .button-margin{
      margin-left: 15px
    }
  `]
})
export class PurchaseFormComponent implements OnInit {
  constructor(
    private purchaseService: PurchaseService,
    private storeService: StoreService) {}

  stores: string[] = [];
  purchases: Purchase[] = [];

  ngOnInit(){
    this.loadSpecies()
  }

  loadSpecies() {
    this.storeService.getStores().subscribe(
      stores => this.stores = stores,
      err => {
        console.log(err);
      });
  }

  submitPurchase(form: NgForm) {
    const purchase = new Purchase(
      form.value.store,
      new Date(form.value.date),
      form.value.pepsiAmountInLitres,
      form.value.pepsiPriceInPurchase,
      form.value.monsterAmountInCans,
      form.value.monsterPricePerCan);

    this.purchaseService.addPurchase(purchase).subscribe(
        data => console.log(data),
        error => console.error(error)
      );
    form.resetForm();
  }

  clear(form: NgForm) {
    form.resetForm();
  }



}
