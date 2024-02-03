import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsPageComponent } from './pages/clients-page/clients-page.component';
import { SharedModule } from '../shared/shared.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ClientsPageComponent,
    LayoutPageComponent,
    HomePageComponent,
    AboutPageComponent,
  ],
  imports: [CommonModule, SharedModule, ClientsRoutingModule, HttpClientModule],
  exports: [ClientsPageComponent, LayoutPageComponent],
})
export class ClientsModule {}
