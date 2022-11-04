import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LivroRoutingModule } from './livro-routing.module';

import { LivroIndexComponent } from './livro-index/livro-index.component';
import { LivroCreateComponent } from './livro-create/livro-create.component'
import { LivroEditComponent } from './livro-edit/livro-edit.component';
import { MensagemModule } from '../mensagem/mensagem.module';



@NgModule({
  declarations: [
    LivroIndexComponent,
    LivroCreateComponent,
    LivroEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LivroRoutingModule,
    MensagemModule
  ]
})
export class LivroModule { }
