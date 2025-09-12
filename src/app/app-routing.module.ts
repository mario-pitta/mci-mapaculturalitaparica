import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscricaoModule } from './layout/pages/inscricao/inscricao.module';

const routes: Routes = [
  //  {
  //   path: '',
  //   loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule),
  // },
  {
    path: 'inscricao',
    loadChildren: () =>
      import('./layout/pages/inscricao/inscricao.module').then(
        (m) => m.InscricaoModule
      ),
  },
  {
    path: '',
    redirectTo: 'inscricao',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
