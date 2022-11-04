import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FuncionarioRoutingModule } from './funcionario-routing.module';

import { FuncionarioIndexComponent } from './funcionario-index/funcionario-index.component';
import { FuncionarioEditComponent } from './funcionario-edit/funcionario-edit.component';
import { FuncionarioCreateComponent } from './funcionario-create/funcionario-create.component';




@NgModule({
  declarations: [
    FuncionarioIndexComponent,
    FuncionarioEditComponent,
    FuncionarioCreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FuncionarioRoutingModule
  ]
})
export class FuncionarioModule { }
