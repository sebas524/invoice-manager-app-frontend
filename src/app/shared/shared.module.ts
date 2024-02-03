import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MainFooterComponent, MainHeaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [MainFooterComponent, MainHeaderComponent],
})
export class SharedModule {}
