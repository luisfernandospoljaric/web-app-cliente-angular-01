import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivroCreateComponent } from './livro-create/livro-create.component';
import { LivroEditComponent } from './livro-edit/livro-edit.component';
import { LivroIndexComponent } from './livro-index/livro-index.component';

const routes: Routes = [
  {path: "", component: LivroIndexComponent},
  {path: "livros-create", component: LivroCreateComponent},
  {path: "livros-edit/:id" , component: LivroEditComponent}
]


  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})


export class LivroRoutingModule { }
