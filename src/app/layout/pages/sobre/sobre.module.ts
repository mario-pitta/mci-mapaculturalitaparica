import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { SobreComponent } from "./sobre.component";
import { AppRoutingModule } from "src/app/app-routing.module";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    SobreComponent],
  imports: [AppRoutingModule, CommonModule, RouterModule],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SobreModule { }
