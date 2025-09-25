import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EquipeComponent } from "./equipe.component";

@NgModule({
  declarations: [EquipeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: EquipeComponent,
      },
    ])
  ],
  exports: [EquipeComponent],
})
export class EquipeModule {}
