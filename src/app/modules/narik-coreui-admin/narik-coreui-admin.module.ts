import { NgModule } from "@angular/core";

import { COMPONENTS } from "./index";

import { RouterModule } from "@angular/router";

import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";

import { NarikMatTabOutletModule } from "@narik/ui-material";

import { SidebarModule } from "@coreui/angular";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    RouterModule,
    PerfectScrollbarModule,
    SidebarModule,
    TranslateModule,
    BsDropdownModule.forRoot(),
    NarikMatTabOutletModule,
  ],
  declarations: [COMPONENTS],
  exports: [COMPONENTS],
  providers: [],
})
export class NarikCoreUiAdmin {}
