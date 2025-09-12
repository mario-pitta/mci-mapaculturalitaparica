import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  sidebarItems = [
    { name: 'SOBRE', url: '/sobre' },
    { name: 'PARTICIPE', url: '/inscricao' },
    { name: 'ARTIGOS', url: '/artigos' },
    { name: 'CALENDÁRIO', url: '/calendario' },
    { name: 'CONTATO', url: '/contato' }
  ]

  locais = [
    { name: 'Itaparica', url: '/itaparica', icon: 'red' },
    { name: 'Itaparica', url: '/itaparica', icon: 'red' },
    { name: 'Itaparica', url: '/itaparica', icon: 'red' },
    { name: 'Itaparica', url: '/itaparica', icon: 'red' },
  ];

  categorias = [
    {name: 'teatro', icon: 'https://images.icon-icons.com/3081/PNG/64/detective_avatar_man_person_investigation_icon_191300.png', color: 'red' },
    {name: 'musica', icon: 'https://images.icon-icons.com/3081/PNG/64/detective_avatar_man_person_investigation_icon_191300.png', color: 'red' },
    {name: 'dança', icon: 'https://images.icon-icons.com/3081/PNG/64/detective_avatar_man_person_investigation_icon_191300.png', color: 'red ' },
    {name: 'literatura', icon: 'https://images.icon-icons.com/3081/PNG/64/detective_avatar_man_person_investigation_icon_191300.png', color: 'red' },
    {name: 'cinema e audiovisual', icon: 'https://images.icon-icons.com/3081/PNG/64/detective_avatar_man_person_investigation_icon_191300.png', color: 'red' },
    {name: 'patrimonio imaterial', icon: 'https://images.icon-icons.com/3081/PNG/64/detective_avatar_man_person_investigation_icon_191300.png', color: 'red' },
    {name: 'patrimonio material', icon: 'https://images.icon-icons.com/3081/PNG/64/detective_avatar_man_person_investigation_icon_191300.png', color: 'red ' },
    {name: 'grupos culturais/coletivos', icon: 'https://images.icon-icons.com/3081/PNG/64/detective_avatar_man_person_investigation_icon_191300.png', color: 'red' },
    {name: 'pontos de cultura', icon: 'https://images.icon-icons.com/3081/PNG/64/detective_avatar_man_person_investigation_icon_191300.png', color: 'red'},

  ]


  constructor() { }

  ngOnInit(): void {
  }

}
