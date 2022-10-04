import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlusComponent } from './modules/main-table/plus/plus.component';
import { MinusComponent } from './modules/main-table/minus/minus.component';
import { CommonComponent } from './layouts/common/common.component';
import { HeaderComponent } from './layouts/header/header.component';
import { BaseInputComponent } from './components/controls/base-input/base-input.component';
import { BaseButtonComponent } from './components/controls/base-button/base-button.component';
import { ManageButtonComponent } from './components/controls/manage-button/manage-button.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SummaryComponent } from './modules/main-table/summary/summary.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { DebtsComponent } from './modules/main-table/debts/debts.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from "@angular/router";
import {AuthService} from "./services/auth/auth.service";
import { SixteenDigitWithSpacesDirective } from './directives/sixteen-digit/sixteen-digit-with-spaces.directive';
import {HttpClientModule} from "@angular/common/http";
import { TooltipDirective } from './directives/tooltip/tooltip.directive';
import {FilesizePipe} from "./pipes/filesize.pipe";
import {AdminModule} from "./modules/admin/admin.module";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

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
    SummaryComponent,
    FooterComponent,
    DebtsComponent,
    SixteenDigitWithSpacesDirective,
    TooltipDirective,
    FilesizePipe,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    AdminModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [ AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {

}
