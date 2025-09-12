import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreComponent } from './sobre/sobre.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        redirectTo: 'sobre',
        pathMatch: 'full',
      },
      {
        path: 'sobre',
        component: SobreComponent,
      },
      {
        path: 'inscricao',
        loadChildren: () => import('./inscricao/inscricao.module').then(m => m.InscricaoModule)
      },
      // {
      //   path: 'artigos',
      //   // loadChildren: () => import('./artigos/artigos.module').then(m => m.ArtigosModule)
      // },
      // {
      //   path: 'calendario',
      //   // loadChildren: () => import('./calendario/calendario.module').then(m => m.CalendarioModule)
      // },
      // {
      //   path: 'contato',
      //   // loadChildren: () => import('./contato/contato.module').then(m => m.ContatoModule)
      // }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
