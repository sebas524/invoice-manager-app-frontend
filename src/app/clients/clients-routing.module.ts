import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ClientsPageComponent } from './pages/clients-page/clients-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'clients',
        component: ClientsPageComponent,
      },
      {
        path: 'home',
        component: HomePageComponent,
      },
      // {
      //   path: 'edit/:id',
      //   component: NewHeroPageComponent,
      // },
      {
        path: 'about',
        component: AboutPageComponent,
      },
      // {
      //   // ! make sure this path is always last because if not it will come into conflict with the ones above!!!
      //   path: ':id',
      //   component: HeroMainPageComponent,
      // },
      {
        path: '**',
        redirectTo: 'clients',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsRoutingModule {}
