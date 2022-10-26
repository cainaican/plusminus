import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlusComponent } from './modules/main-table/plus/plus.component';
import { MinusComponent } from './modules/main-table/minus/minus.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SummaryComponent } from './modules/main-table/summary/summary.component';
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
import { BaseButtonComponent } from './view/components/controls/base-button/base-button.component';
import { BaseInputComponent } from './view/components/controls/base-input/base-input.component';
import { ManageButtonComponent } from './view/components/controls/manage-button/manage-button.component';
import { CommonComponent } from './view/layouts/common/common.component';
import { FooterComponent } from './view/layouts/footer/footer.component';
import { HeaderComponent } from './view/layouts/header/header.component';

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
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {

}
