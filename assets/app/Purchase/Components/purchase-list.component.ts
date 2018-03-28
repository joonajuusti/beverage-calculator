import { Component, ViewChild, OnInit, OnChanges } from "@angular/core";
import { MatTableDataSource, MatSort } from '@angular/material';

import { Purchase } from "../models/purchase";
import { PurchaseService } from "../Services/purchase.service";

@Component({
  selector: 'purchase-list',
  //styleUrls: ['purchase-list.component.css'],
  templateUrl: './purchase-list.component.html',
})
export class PurchaseList implements OnInit, OnChanges {
  purchases: Purchase[];
  constructor(private purchaseService: PurchaseService) {}


  ngOnInit() {
    this.purchaseService.getPurchases()
      .subscribe(
        (purchases: Purchase[]) => {
          this.purchases = purchases;
        }
      );
  }

  

  /*displayedColumns = ['store', 'date', 'pepsiAmountInLitres', 'pepsiPriceInPurchase', 'monsterAmountInCans', 'monsterPricePerCan'];
  dataSource = new MatTableDataSource(this.purchaseService.getPurchases());



  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }*/

  ngOnChanges() {
  //  this.dataSource = new MatTableDataSource(this.purchaseService.getPurchases());
  }

}
