import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MapaComponent } from './mapa.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MapaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: MapaComponent,
      },
    ]),
    GoogleMapsModule
  ],
  exports: [],
  providers: [],
})
export class MapaModule {}
