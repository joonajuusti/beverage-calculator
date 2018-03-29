import { Component} from '@angular/core';

@Component({
    selector: 'purchase-widget',
    template: `
        <div class="row">
          <div class="col-6 mx-auto">
            <store-form></store-form>
            <br>
            <purchase-form></purchase-form>
            <br>
            <purchase-list></purchase-list>
          </div>
        </div>
    `
})
export class PurchaseComponent {

 }
