import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsPageComponent } from './pages/clients-page/clients-page.component';
import { SharedModule } from '../shared/shared.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateUserPageComponent } from './pages/create-user-page/create-user-page.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';

@NgModule({
  declarations: [
    ClientsPageComponent,
    LayoutPageComponent,
    HomePageComponent,
    AboutPageComponent,
    CreateUserPageComponent,
    ProfilePageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ClientsRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
  ],
  exports: [ClientsPageComponent, LayoutPageComponent, CreateUserPageComponent],
})
export class ClientsModule {}
