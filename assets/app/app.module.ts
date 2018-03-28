import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";
import { PurchaseModule } from "./Purchase/purchase.module"
import { EmitterService } from "./emitter.service";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [BrowserModule,
              FormsModule,
              PurchaseModule],
    providers: [
      EmitterService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
