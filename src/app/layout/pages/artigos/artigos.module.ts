import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ArtigosComponent } from "./artigos.component";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ArtigosComponent
      }
    ]),
  ],
  declarations: [
    ArtigosComponent
  ],
})
export class ArtigosModule {}
