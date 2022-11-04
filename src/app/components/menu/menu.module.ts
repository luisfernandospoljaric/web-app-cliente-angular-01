import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { RouterLink, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports:[
    MenuComponent
  ]
})
export class MenuModule { }
