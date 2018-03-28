import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Purchase } from "../models/purchase";

@Injectable()
export class PurchaseService {
  constructor(private http: Http) {}

  purchases: Purchase[] = [];

  addPurchase(purchase: Purchase) {
    this.purchases.push(purchase);
    const body = JSON.stringify(purchase);
    const headers = new Headers({'Content-type': 'application/json'});
    return this.http.post('http://localhost:3000/purchase', body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  getPurchases() {
    console.log("getPurchases executed");
    return this.http.get('http://localhost:3000/purchase')
      .map((response: Response) => {
        const purchases = response.json().purchases;
        //console.log(purchases);
        //console.log(purchases[0]._id);
        let transformedPurchases: Purchase[] = [];
        for(let purchase of purchases) {
          transformedPurchases.push(new Purchase(
            purchase.store,
            purchase.date,
            purchase._id,
            purchase.pepsiAmountInLitres,
            purchase.pepsiPriceInPurchase,
            purchase.monsterAmountInCans,
            purchase.monsterPricePerCan
          ));
        }
        this.purchases = transformedPurchases;
        return transformedPurchases;
      })
      .catch((error: Response) => Observable.throw(error.json()));
  }

  deletePurchase(purchase: Purchase) {
    this.purchases.splice(this.purchases.indexOf(purchase), 1);
    return this.http.delete('http://localhost:3000/purchase/' + purchase.purchaseId)
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }



}
