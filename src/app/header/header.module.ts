import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './components/header.component';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HeaderRoutingModule,
    NgOptimizedImage
  ]
})
export class HeaderModule { }
