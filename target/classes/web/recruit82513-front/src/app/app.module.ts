import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonComponent } from './core/sheredComponents/button/button.component';
import { ComponentSupplierComponent } from './core/sheredComponents/component-supplier/component-supplier.component';
import { ModalComponent } from './core/sheredComponents/modal/modal.component';
import { SpinnerComponent } from './core/sheredComponents/spinner/spinner.component';
import { ListComponent } from './core/sheredComponents/list/list.component';
import { SelectedStrategyComponent } from './components/selected-strategy/selected-strategy.component';
import { AddStrategyComponent } from './components/add-strategy/add-strategy.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ComponentSupplierComponent,
    ModalComponent,
    SpinnerComponent,
    ListComponent,
    SelectedStrategyComponent,
    AddStrategyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
