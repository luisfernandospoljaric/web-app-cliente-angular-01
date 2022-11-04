import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionarioCreateComponent } from './funcionario-create/funcionario-create.component';
import { FuncionarioEditComponent } from './funcionario-edit/funcionario-edit.component';
import { FuncionarioIndexComponent } from './funcionario-index/funcionario-index.component';




const routes: Routes = [
  {path: "", component: FuncionarioIndexComponent},
  {path: "funcionarios-create", component: FuncionarioCreateComponent},
  {path: "funcionarios-edit/:id", component: FuncionarioEditComponent}
]


  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FuncionarioRoutingModule { }
