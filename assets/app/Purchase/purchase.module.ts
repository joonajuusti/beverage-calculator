import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { MatTableModule, MatSortModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PurchaseBoxComponent } from './components/purchase-box.component';
import { PurchaseFormComponent } from './components/purchase-form.component';
import { PurchaseComponent } from './components/index';
import { PurchaseList } from './components/purchase-list.component';
import { PurchaseService } from './Services/purchase.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    MatTableModule,
    MatSortModule,
    BrowserAnimationsModule
  ],
  declarations: [
    PurchaseBoxComponent,
    PurchaseFormComponent,
    PurchaseComponent,
    PurchaseList
  ],

  providers: [
    PurchaseService
  ],

  exports:[
    PurchaseBoxComponent,
    PurchaseFormComponent,
    PurchaseComponent,
    PurchaseList
  ]
})
export class PurchaseModule {
}
