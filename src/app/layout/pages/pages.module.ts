import { NgModule } from "@angular/core";
import { PagesComponent } from "./pages.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { PagesRoutingModule } from "./pages.routing";

@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    RouterModule,
    PagesRoutingModule
  ],
  exports: [PagesComponent],
})
export class PagesModule {}
