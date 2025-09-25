import { Component, OnInit } from '@angular/core';

declare interface ITeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
  leader: boolean;
}

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.scss'],
})
export class EquipeComponent implements OnInit {
  team: ITeamMember[] = [
    // lara carvalho
    {
      name: 'Lara Carvalho',
      role: 'Idealizadora',
      image: '/assets/images/equipe/lara_carvalho.png',
      description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti sapiente commodi, nemo tempora a
                    rem doloribus repellat eius harum, officiis aut quidem. Laborum aliquam voluptas necessitatibus
                    eveniet commodi laudantium praesentium.`,
      leader: true,
    },
    // stéfane souto
    {
      name: 'Stéfane Souto',
      role: 'Idealizadora',
      image: '/assets/images/equipe/stefane_souto.png',
      description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti sapiente commodi, nemo tempora a
                    rem doloribus repellat eius harum, officiis aut quidem. Laborum aliquam voluptas necessitatibus
                    eveniet commodi laudantium praesentium.`,
      leader: true,
    },

    // alyssa volpini
    {
      name: 'Alyssa Volpini',
      role: 'Designer & Ilustração',
      image: '/assets/images/equipe/alyssa.png',
      description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti sapiente commodi, nemo tempora a
                    rem doloribus repellat eius harum, officiis aut quidem. Laborum aliquam voluptas necessitatibus
                    eveniet commodi laudantium praesentium.`,
      leader: false,
    },
    // sofia costa
    {
      name: 'Sofia Costa',
      role: 'Designer & Ilustração',
      image: '/assets/images/equipe/alyssa.png',
      description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti sapiente commodi, nemo tempora a
                    rem doloribus repellat eius harum, officiis aut quidem. Laborum aliquam voluptas necessitatibus
                    eveniet commodi laudantium praesentium.`,
      leader: false,
    },
        // mario pitta
    {
      name: 'Mario Pitta',
      role: 'Desenvolvedor',
      image: '/assets/images/equipe/alyssa.png',
      description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti sapiente commodi, nemo tempora a
                    rem doloribus repellat eius harum, officiis aut quidem. Laborum aliquam voluptas necessitatibus
                    eveniet commodi laudantium praesentium.`,
      leader: false,
    },
    // felipe Brito
    {
      name: 'Felipe Brito',
      role: 'Pesquisador',
      image: '/assets/images/equipe/alyssa.png',
      description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti sapiente commodi, nemo tempora a
                    rem doloribus repellat eius harum, officiis aut quidem. Laborum aliquam voluptas necessitatibus
                    eveniet commodi laudantium praesentium.`,
      leader: false,
    },
  ];

  realizadores!: ITeamMember[];
  equipe!: ITeamMember[];

  constructor() {}

  ngOnInit(): void {
    this.equipe = this.team.filter((member) => !member.leader);
  }
}
