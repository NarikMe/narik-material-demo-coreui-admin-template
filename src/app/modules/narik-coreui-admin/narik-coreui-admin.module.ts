import { NgModule } from "@angular/core";

import { COMPONENTS } from "./index";

import { RouterModule } from "@angular/router";

import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";

import { NarikMatTabOutletModule } from "@narik/ui-material";

import {
  AppAsideModule,
  AppHeaderModule,
  AppSidebarModule
} from "@coreui/angular";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    RouterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    AppAsideModule,
    TranslateModule,
    BsDropdownModule.forRoot(),
    NarikMatTabOutletModule
  ],
  declarations: [COMPONENTS],
  exports: [COMPONENTS],
  providers: []
})
export class NarikCoreUiAdmin {}
