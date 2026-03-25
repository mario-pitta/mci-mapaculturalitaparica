import { Component, OnInit, OnDestroy } from '@angular/core';
import { SidebarService } from '../../core/services/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isOpen = false;
  private sub: any;
  constructor(private sidebarService: SidebarService) {
  }

  ngOnInit(): void {
    this.sub = this.sidebarService.open$.subscribe(v => this.isOpen = v);
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  toggleSidebar() {
    this.sidebarService.toggle();
  }

}
