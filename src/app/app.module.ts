import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlusComponent } from './components/plus/plus.component';
import { MinusComponent } from './components/minus/minus.component';
import { CommonComponent } from './layouts/common/common.component';
import { HeaderComponent } from './layouts/header/header.component';
import { BaseInputComponent } from './components/controls/base-input/base-input.component';
import { BaseButtonComponent } from './components/controls/base-button/base-button.component';
import { ManageButtonComponent } from './components/controls/manage-button/manage-button.component';
import {FormsModule} from "@angular/forms";
import { SummaryComponent } from './components/summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    PlusComponent,
    MinusComponent,
    CommonComponent,
    HeaderComponent,
    BaseInputComponent,
    BaseButtonComponent,
    ManageButtonComponent,
    SummaryComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
