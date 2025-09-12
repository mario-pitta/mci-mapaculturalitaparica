import { NgModule } from "@angular/core";
import { InscricaoComponent } from "./inscricao.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [InscricaoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: InscricaoComponent,
      },
    ])
  ],
  exports: [],
})
export class InscricaoModule {}
