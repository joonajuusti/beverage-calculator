import { Component, OnInit } from "@angular/core";
import { NgForm } from '@angular/forms';

import { StoreService } from '../Services/store.service';

@Component({
  selector: 'store-form',
  template: `
  <form (ngSubmit)="submitStore(storeForm)" #storeForm="ngForm">
    <div class="form-group">
      <label for="store">Store</label>
      <input
        type="text"
        class="form-control"
        id="store"
        placeholder="Store"
        required
        [ngModel]
        name="store">
      <button
        class="btn btn-primary"
        type="submit">Add Store</button>
      <button
        class="btn btn-danger"
        type="button"
        (click)="getStores()">Log stores</button>
    </div>
  </form>
  `
})
export class StoreFormComponent implements OnInit {
  constructor(private storeService: StoreService) {

  }

  stores: string[] = [];

  submitStore(form: NgForm) {
    const store = form.value.store;
    this.storeService.addStore(store)
      .subscribe(
        data => console.log(data),
        error => console.error(error)
      );
    form.resetForm();
  }

  ngOnInit() {
    this.storeService.getStores()
      .subscribe(
        (stores: string[]) => {
          this.stores = stores;
        }
      );
  }

  getStores() {
    console.log(this.stores);
  }

}
