import { Injectable, OnInit } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class StoreService {
  constructor(private http: Http) {}

  stores: string[] = [];

  addStore(store: string) {
    this.stores.push(store);
    const body = JSON.stringify({"name": store});
    const headers = new Headers({'Content-type': 'application/json'});
    return this.http.post('http://localhost:3000/store', body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  getStores() {
    return this.http.get('http://localhost:3000/store')
      .map((response: Response) => {
        const stores = response.json().stores;
        let transformedStores: string[] = [];
        for(let store of stores) {
          transformedStores.push(store.name);
        }
        this.stores = transformedStores;
        return transformedStores;
      })
      .catch((error: Response) => Observable.throw(error.json()));
  }
}
