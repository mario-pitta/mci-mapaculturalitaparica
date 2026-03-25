import { Component, OnInit } from '@angular/core';

declare interface ITeamMember {
  name: string;
  role: string;
  image?: string;
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
      description: `Lara Carvalho é Professora de Cinema e Audiovisual na Faculdade de Comunicação da Universidade Federal da Bahia, Doutoranda e Mestre pelo Póscom/UFBA. Soteropolitana com raízes em Itaparica e no Recôncavo Baiano, atua como roteirista, diretora e produtora há 15 anos. Foi Coordenadora Audiovisual da 3ª Bienal da Bahia e assina os roteiros de projetos como Meridianos, 56 Dias, Menarca, Quitéria, Escorço, Fórmula Dreams, Damiano e Hyperkart. Finalista do Sundance Episodic Lab e vencedora do Concurso Narratologias 2023. Em 2024 lançou o curta ficcional 56 Dias, o podcast híbrido Meridianos e, em 2025, lançou o documentário infanto-juvenil Menarca. Também integra os projetos Mapa Cultural de Itaparica, Campos Rupestres e FLIRO – Festa de Literatura e Roteiro. Como pesquisadora audiovisual e escritora, publicou diversos artigos, além dos livros Uma (Breve) História das Mulheres no Cinema (2022) e Cinema: substantivo feminino (2024). Também integra as antologias Quem dera o sangue fosse só da menstruação, Corpo que arde e Selo Off Flip 2024. Pesquisa cinemas feitos por mulheres, cineastas latinoamericanas e questões do corpo, do sensível e da ritualidade no audiovisual e integra o grupo de pesquisa (An)arqueologias do Sensível (Póscom/UFBA). Atualmente, está em fase de produção do curta de animação Mar Subversivo e desenvolve sua tese de doutorado que propõe um atlas de gestos de cinema-ritual.
`,
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


    //team
    // alyssa volpini
    {
      name: 'Alyssa Volpini',
      role: 'Designer/Site e Peças Gráficas',
      image: '/assets/images/equipe/Alyssa Volpini.jpg',
      description: `Graduada em Arquitetura e Urbanismo pela Universidade de Brasília (UNB), com mobilidade acadêmica na Faculdade de Arquitetura da Universidade Federal da Bahia (UFBA). Artivista e graduanda em Arquitetura e Urbanismo pela Universidade de Brasília. Cofundadora da Coletiva Arquitetas inVisíveis, que busca fomentar as equidades de gênero no âmbito da Arquitetura, Urbanismo e áreas relacionadas. Atualmente, mora em Salvador/BA e integra o grupo de pesquisa Laboratório Urbano (PPGAU/UFBA), pesquisando o campo historiográfico do urbanismo no país pela Cronologia do Pensamento Urbanístico. Sua produção recorre à diferentes linguagens, entre elas: intervenções urbanas, murais, colagens, serigrafias, instalações e ilustrações. Pelo lambe-lambe, busca tecer novas narrativas e criar diálogos na cidade. Foi bolsista de Iniciação Científica na pesquisa Cronologia do Pensamento Urbanístico (2019-2022), sob orientação da professora Paola Berenstein Jacques. Fez parte da pesquisa História Intelectual do Seminário de História da Cidade e do Urbanismo (2020-2021). Desde 2016, caminha buscando resgatar afetos - de forma urgente - com o projeto cafeto, me permitindo demorar atentamente as memórias dos longos cafés com seus avós. Trabalha com direção de arte, design gráfico, mídias sociais, cenografia, produção, arquitetura e ilustração.
`,
      leader: false,
    },

    // felipe Brito
    {
      name: 'Felipe Brito',
      role: 'Pesquisador Assistente',
      image: '/assets/images/equipe/Felipe Peixoto Brito.jpg',
      description: `Pesquisador independente e natural de Itaparica – BA. Atua desde o ensino médio em causas ambientais e estudantis enquanto aluno dos colégios São Luís, João Ubaldo Ribeiro e Jutahy Magalhães, é membro da AEITA (Associação dos Estudantes da Ilha de Itaparica), onde já atuou em oficinas nos cursos de pré-vestibular, oferecidos pela instituição. Em 2016, fundou o Maré de Março - coletivo socioambiental atuante desde então; em 2017 foi eleito simultaneamente membro dos Conselhos de Cultura e de Turismo de Itaparica. Em 2018 foi nomeado Diretor de Políticas Culturais do Município de Itaparica, cargo que exerceu por dois anos, desenvolvendo projetos importantes para a preservação e difusão da memória, e dos patrimônios materiais e imateriais do município, sendo o de maior notoriedade, a implementação, na Fortaleza de São Lourenço, do Memorial da Independência do Brasil na Bahia em parceria com a Marinha do Brasil, IPAC, IPHAN-BA, que inaugurado em 7 de janeiro de 2019, tornou-se o primeiro espaço público dedicado à esta memória na ilha de Itaparica. Atua também como fotógrafo, videomaker e escritor, tendo alguns trabalhos e entrevistas publicadas na internet. Em 2019 participou da produção do disco do “O Futuro Não Demora” da BaianaSystem, e recentemente assina como co-compositor de faixas, como “Corneteiro Luís” da mesma banda, que aborda a temática da Batalha de Pirajá. É colaborador voluntário do Instituto Sacatar, atuando desde 2015, em diversos projetos dos artistas residentes, oriundos de diversos países. Em 2022 escreveu o seu primeiro artigo no campo historiográfico, sendo publicado em 2023 pela revista Veredas da História da UFBA, com o título “A presença de Maria Felipa num processo judicial em Itaparica, Bahia, 1834” o texto de sua coautoria revela aspectos da vida da personagem histórica em evidência, e também trata da memória política e social da ilha de Itaparica.`,
      leader: false,
    },
    // sofia costa
    {
      name: 'Sofia Costa',
      role: 'Designer/Identidade Visual',
      image: '/assets/images/equipe/Sofia Costa.jpg',
      description: `Formada em Arquitetura e Urbanismo pela Universidade Federal da Bahia, artista visual e pós-graduada em design de estampa pelo Senai Cetiqt. Como estudante de arquitetura participou de pesquisas acadêmicas orientadas por Júnia Mortimer e Gabriela Leandro, do projeto de extensão escritório modelo de arquitetura e Urbanismo (CURIAR) e estagiou no escritório Argollo e Martins. Atualmente vem atuando como artista visual e designer em projetos com os artistas Luedji Luna, Diego Araúja e Lara Carvalho. Também como ilustradora para a revista Glamour e o podcast de Rafael Segatto (ainda em andamento).`,
      leader: false,
    },
    // mario pitta
    {
      name: 'Mario Pitta',
      role: 'Desenvolvedor',
      image: '/assets/images/equipe/Mario Pitta.jpg',
      description: `Com trajetória consolidada no desenvolvimento de software desde 2017, Mario é especialista em criar soluções robustas utilizando Angular, TypeScript e Ionic. Sua versatilidade permite atuar com maestria em todo o ciclo de desenvolvimento, dominando tecnologias como React, Node.js (NestJS) e C#.

Com passagens estratégicas por projetos de gestão pública, marketplaces e sistemas jurídicos (TRT), ele traz uma visão experiente na arquitetura de softwares. Atualmente, expande a entrega de valor dos times que atua através de competências em DevOps (Docker e AWS/GCP), garantindo que suas soluções sejam não apenas inovadoras, mas escaláveis e eficientes. É movido pelo desafio de transformar tecnologia em ferramentas que impactam positivamente o cotidiano das pessoas.`,
      leader: false,
    },

    // Ísis Almeida -
    {
      name: 'Ísis Almeida',
      role: 'Coordenadora de Comunicação',
      image: '/assets/images/equipe/I_sis Almeida.jpg',
      description: `Sócia-fundadora e diretora executiva de Jornalismo e Projetos do Portal Black Mídia, além de idealizadora do “Se Organiza, Bonita!”, I’sis é jornalista, bacharel interdisciplinar em Artes e pós-graduanda em Direitos, Desigualdades e Governança Climática pela Universidade Federal da Bahia (UFBA). Atua no jornalismo tradicional e independente como editora, redatora, produtora audiovisual e apresentadora de conteúdos documentais e jornalísticos, somando mais de 10 anos de atuação na comunicação social.
Gisele Santana é Jornalista e Especialista em Comunicação Estratégica com Gestão de Marcas pela UFBA. Atua como Assessora de Imprensa há mais de 10 anos, passando por empresas como Allcance Comunicação & Produção de Eventos e Ana Camila Comunicação & Cultura. É Coordenadora de Comunicação da Mostra de Cinemas Africanos e foi Assessora de Imprensa do Festival Internacional VIVADANÇA em 2021. Atuou na Assessoria de Comunicação de eventos da Embaixada de Gana no Brasil por dois anos. Foi produtora e repórter na TV UFBA e Coordenadora de Marketing da Associação de Jovens Empreendedores da Bahia (AJE Bahia) entre 2019 e 2020. É facilitadora em workshops de comunicação estratégica para empreendedores e artistas.
`,
      leader: false,
    },
    // Camila Brito -
    {
      name: 'Camila Brito',
      role: 'Assistente de Produção',
      image: '/assets/images/equipe/Camila Brito.jpg',
      description: `Produtora, pesquisadora e empreendedora cultural, Camila Brito traz 15 anos de experiência no setor criativo. Atuou como gestora de equipamentos culturais na Secult Salvador (2023), na área de economia criativa da SecutBA (2010-2013), com formação de agentes culturais pelo Projeto Qualicultura (2013) e foi facilitadora na Formação de Agentes de Cultura Griô na aldeia Tupinambá (2018). Também atuou em diversos projetos e artistas da cena baiana, como Orquestra Sinfônica da Bahia, Conferências Territoriais de Cultura, Festival Latinidades, Festival Salvador Capital Afro, Acervo Imediato, Mostra Itinerante de Cinemas Negros, OSBACURI, dentre outros. Graduada em Produção Cultural (Ufba), formada em Música e Negócios (Escola de Música e Negócios e Puc Rio) e mestra em Cultura e Sociedade (Ufba), com produção de pesquisa na área de identidade, etnicidades e produção cultural indígena. Foi cofundadora da Denda Coletiva, coletiva de produtoras culturais baianas e embaixadora no Womens Music Event entre 2022 e 2025. Em 2019 fundou a Coliga Produções, com foco na música independente negra e indígena, atuando com mentorias, gestão artística, produção executiva, projetos autorais e o selo musical Cabaça Sonora. Atualmente é Diretora Geral da Coliga Produções, gerenciando projetos e agenciando as carreiras de Daniela Nátali e Riane Mascarenhas, além de ser diretora criativa do selo musical.
`,
      leader: false,
    },
    // Tais Bichara
    {
      name: 'Tais Bichara',
      role: 'Assistente de Produção',
      image: '/assets/images/equipe/Tais Bichara.jpg',
      description: `
     Graduada em Jornalismo pela Universidade Federal da Bahia (UFBA), trabalha com produção cultural desde 2010. É criadora e diretora da série documental “Donas do Baba”, sobre mulheres e futebol, atualmente disponível no YouTube e antes exibida pela TVE Bahia e em festivais internacionais. Em 2016, tornou-se produtora artística e logística do Radioca, festival de música de Salvador, e em 2023 assumiu a sua direção de produção. Desde 2018, produz espetáculos teatrais como “Criança ferida ou de como me disseram que eu era gay”, “Das ‘coisa’ dessa vida…” e “Véspera - Tome Isto Que a Vida Te Dá”. No audiovisual, atua como produtora e assistente de direção principalmente em séries e longas documentais produzidos na Bahia. Desde 2024, integra a equipe da Dimenti Produções Culturais e da Associação Conexões Criativas como produtora executiva.
      `,
      leader: false,
    },


    // Gabriela Palha
    {
      name: 'Gabriela Palha',
      role: 'Assessora de Imprensa',
      // image: '/assets/images/equipe/Gabriela Palha.jpg',
      description: `
      Nascida em Maputo/Moçambique, cresceu na Bahia, entre o Recôncavo e a Capital. Iniciou na fotografia de forma despretensiosa, registrando o cotidiano das ruas através de um telefone celular. O hábito passou a ser diário, tornando mais intenso o processo de experimentação e realização fotográfica. Suas fotografias trazem um viés documental e se dão a partir do encontro ocasional com os fotografados, em diversas circunstâncias. Já teve seus trabalhos exibidos em mostras e exposições dentro e fora do Brasil como o "Primeiro Salão Nacional de Arte Fotográfica de Cachoeiro do Itapemirim-ES"(2018), a exposição "A Festa e Interrupções da Vida Diária" no Goethe-Institut Salvador-Bahia (2018),  a "9 Mostra de Fotografia – Panorama" no Museu de Arte Contemporânea Raimundo Oliveira – MAC, em Feira de Santana – Bahia (2019), "Exposição Rua Brasil" no Centro Cultural Brasil Argentina, em Buenos Aires – Argentina (2019),  "I Bienal Black Brazil Art" no Memorial do RS, em Porto Alegre – RS (2019/2020), "Exposição Rua Brasil" no Centro Cultura Brasil-México, na Cidade do México - México (2021) e "Efêmero Festival" em Fortaleza - Ceará (2021), além da exposição individual audio fotográfica "Afetos: Imagem, Som e Conexões Diaspóricas, no Espaço Cultural Hansen Bahia, em Cachoeira – Bahia (2019 ". Graduada em Cinema e Audiovisual pela Universidade Federal do Recôncavo da Bahia, atua no audiovisual como fotógrafa still e técnica de som direto, tendo participado de diversas produções entre curtas e longas metragens.
      `,
      leader: false,
    },
    // Adriana Urpia
    {
      name: 'Adriana Urpia',
      role: 'Coordenação de Acessibilidade',
      // image: '/assets/images/equipe/Adriana Urpia.jpg',
      description: `
      Especialista em TAVa (Tradução Audiovisual Acessível – Audiodescrição) pela Universidade Estadual do Ceará (UECE, 2019) e revisora de LSE (Legenda para Surdos e Ensurdecidos), é graduada em Comunicação Social com ênfase em Publicidade e Propaganda pela Universidade Católica de Salvador. Atua como tradutora de língua inglesa desde 1992 e como corretora e revisora de textos literários e não literários em língua portuguesa, com passagem pelas áreas de marketing, turismo e dança. Formou-se em audiodescrição com a Profa. Dra. Eliana Franco em 2008, integrou o TRAMAD até seu encerramento e, em 2015, realizou formação com o Dr. Joel Snyder, obtendo certificação pela Audio Description Associates, LLC (EUA). Além da criação de roteiros, atua como voice talent e narradora em filmes, séries, teatro e eventos ao vivo com audiodescrição. É sócia-fundadora da ADarte Acessibilidade, produtora dedicada à transformação de conteúdos audiovisuais em obras acessíveis por meio de AD, LSE e janela de Libras, além de prestar consultoria em acessibilidade para exposições, instalações, memoriais, festivais, espetáculos e eventos culturais em geral.
      `,
      leader: false,
    },

  ];

  realizadores!: ITeamMember[];
  equipe!: ITeamMember[];

  constructor() { }

  ngOnInit(): void {
    this.equipe = this.team.filter((member) => !member.leader);
  }
}
