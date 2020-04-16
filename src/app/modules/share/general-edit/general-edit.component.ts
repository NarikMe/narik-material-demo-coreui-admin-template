import { Component, Injector } from "@angular/core";
import { NarikUiEditForm } from "@narik/ui-lib";
import { NarikBaseTemplate, DynamicForm } from "@narik/core";

@NarikBaseTemplate("NarikEditUi")
@DynamicForm("GeneralEditComponent")
@Component({
  templateUrl: "general-edit.component.html"
})
export class GeneralEditComponent extends NarikUiEditForm<any> {

  constructor(injector: Injector) {
    super(injector);
  }
}
