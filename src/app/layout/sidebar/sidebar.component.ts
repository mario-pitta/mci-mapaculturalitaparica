import { Component, OnInit, OnDestroy, ElementRef, Renderer2, HostListener } from '@angular/core';
import { SidebarService } from '../../core/services/sidebar.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  sidebarItems = [
    { name: 'MAPA', url: '/mapa' },
    { name: 'PARTICIPE', url: '/inscricao' },
    { name: 'SOBRE', url: '/sobre' },
    // { name: 'ARTIGOS', url: '/artigos' },
    // { name: 'CALENDÁRIO', url: '/calendario' },
    { name: 'EQUIPE', url: '/equipe' },
  ]

  locais = [
    { name: 'Itaparica', icon: '/assets/images/padrao-elementos-soltos/azulejo1.png', url: '/itaparica' },
    { name: 'Vera Cruz', icon: '/assets/images/padrao-elementos-soltos/azulejo2.png', url: '/itaparica' },
    // { name: 'Itaparica', icon: '/assets/images/padrao-elementos-soltos/azulejo3.png', url: '/itaparica' },
    // { name: 'Itaparica', icon: '/assets/images/padrao-elementos-soltos/azulejo4.png', url: '/itaparica' },
  ];

  categorias = [
    {name: 'teatro', icon: '/assets/images/icones/icones sites-12.png', color: 'yellow' },
    {name: 'musica', icon: '/assets/images/icones/icones sites-13.png', color: 'darkblue' },
    {name: 'dança', icon: '/assets/images/icones/icones sites-14.png', color: 'cyan' },
    {name: 'literatura', icon: '/assets/images/icones/icones sites-15.png', color: 'pink' },
    {name: 'cinema e audiovisual', icon: '/assets/images/icones/icones sites-16.png', color: 'red' },
    {name: 'patrimonio imaterial', icon: '/assets/images/icones/icones sites-17.png', color: 'lightblue' },
    {name: 'patrimonio material', icon: '/assets/images/icones/icones sites-18.png', color: 'yellow' },
    {name: 'grupos culturais/coletivos', icon: '/assets/images/icones/icones sites-19.png', color: 'salmon' },
    {name: 'pontos de cultura', icon: '/assets/images/icones/icones sites-20.png', color: 'darkgreen'},

  ]


  isOpen = false;
  private sub: Subscription | null = null;

  // keep element ref and renderer for focus management
  constructor(private elRef: ElementRef, private renderer: Renderer2, public sidebarService: SidebarService) { }

  ngOnInit(): void {
    this.sub = this.sidebarService.open$.subscribe(v => {
      this.isOpen = v;
      if (v) { // opened -> move focus to first focusable control inside sidebar
        setTimeout(() => this.focusFirstDescendant(), 50);
      }
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  @HostListener('document:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent) {
    if (!this.isOpen) { return; }
    if (event.key === 'Escape' || event.key === 'Esc') {
      this.sidebarService.close();
    }
  }

  private focusFirstDescendant(): void {
    try {
      const host: HTMLElement = this.elRef.nativeElement;
      const focusable = host.querySelectorAll('a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (focusable && focusable.length) {
        (focusable[0] as HTMLElement).focus();
      }
    } catch (e) {
      // ignore
    }
  }

}
