import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  sidebarItems = [
    { name: 'Sobre', url: '/sobre' },
    { name: 'Artigos', url: '/artigos' },
    { name: 'Calendário', url: '/calendario' },
    { name: 'Contato', url: '/contato' }
  ]

  locais = [
    { name: 'Itaparica', url: '/itaparica', icon: 'red' },
    { name: 'Itaparica', url: '/itaparica', icon: 'red' },
    { name: 'Itaparica', url: '/itaparica', icon: 'red' },
  ];

  categorias = [
    {name: 'teatro', icon: 'path/to/teatro-icon.png', color: 'color'},
    {name: 'musica', icon: 'path/to/musica-icon.png', color: 'color'},
    {name: 'dança', icon: 'path/to/dança-icon.png', color: 'color'},
    {name: 'literatura', icon: 'path/to/literatura-icon.png', color: 'color'},
    {name: 'cinema e audiovisual', icon: 'path/to/cinema e audiovisual-icon.png', color: 'color'},
    {name: 'patrimonio imaterial', icon: 'path/to/patrimonio imaterial-icon.png', color: 'color'},
    {name: 'patrimonio material', icon: 'path/to/patrimonio material-icon.png', color: 'color'},
    {name: 'grupos culturais/coletivos', icon: 'path/to/grupos culturais/coletivos-icon.png', color: 'color'},
    {name: 'pontos de cultura', icon: 'path/to/pontos de cultura-icon.png', color: 'color'},

  ]


  constructor() { }

  ngOnInit(): void {
  }

}
