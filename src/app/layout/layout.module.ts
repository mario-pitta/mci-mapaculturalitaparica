import { NgModule } from "@angular/core";
import { LayoutComponent } from "./layout.component";
import { CommonModule } from "@angular/common";
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PagesComponent } from './pages/pages.component';
import { RouterModule } from "@angular/router";
import { PagesModule } from "./pages/pages.module";

@NgModule({
  declarations: [LayoutComponent, SidebarComponent, FooterComponent, HeaderComponent],
  imports: [CommonModule, PagesModule, RouterModule],
  exports: [LayoutComponent]
})
export class LayoutModule { }
