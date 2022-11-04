import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "livros", loadChildren: () => import('./components/livro/livro.module').then(l => l.LivroModule)},
  {path: "funcionarios", loadChildren: () => import('./components/funcionario/funcionario.module').then(f => f.FuncionarioModule)},
  {path: "**", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
