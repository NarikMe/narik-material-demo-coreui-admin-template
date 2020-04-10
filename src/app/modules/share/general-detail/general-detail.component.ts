import { Component, Injector } from "@angular/core";
import { NarikUiDetailForm } from "@narik/ui-lib";
import { NarikBaseTemplate, DynamicForm } from "@narik/core";

@NarikBaseTemplate("NarikDetailUi")
@DynamicForm("GeneralDetailComponent")
@Component({
  templateUrl: "general-detail.component.html"
})
export class GeneralDetailComponent extends NarikUiDetailForm<any> {

  constructor(injector: Injector) {
    super(injector);
  }
}
