import { Component } from "@angular/core";
import { SidebarService } from '../core/services/sidebar.service';

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"]
})
export class LayoutComponent {
  constructor(public sidebarService: SidebarService) {}
}
