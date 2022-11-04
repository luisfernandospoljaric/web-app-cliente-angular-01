import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario/funcionario.service';

@Component({
  selector: 'app-funcionario-index',
  templateUrl: './funcionario-index.component.html',
  styleUrls: ['./funcionario-index.component.css']
})
export class FuncionarioIndexComponent implements OnInit {
  Funcionario: Funcionario;
  Funcionarios: Funcionario[];

  constructor(private funcionarioService: FuncionarioService, private router: Router) {
    this.Funcionarios = new Array<Funcionario>();
    this.Funcionario = new Funcionario;
   }

  ngOnInit(): void {
  }

  pesquisar(): void{
    if (this.Funcionario.Id === 0){
      this.pesquisarTodos();
    }else{
      this.pegarPorId(this.Funcionario.Id);
    }
  }

  pegarPorId(id: Number){
    this.funcionarioService.getId(id).subscribe({next: (funcionario)=> this.passaDados(funcionario)});
  }
  passaDados(funcionario: Funcionario){
    this.Funcionarios[0] = funcionario;
  }

  pesquisarTodos(): void{
    this.funcionarioService.getAll()
    .pipe(take(1))
    .subscribe({
      next: (funcionarios) => this.handleResponseOK(funcionarios),
      error: erro => this.handleResponseError(erro)
    });
  }


  handleResponseOK(funcionarios: Funcionario[]): void{
    this.Funcionarios = funcionarios;
  }

  handleResponseExcluirOk(id: number): void{
    alert(`O funcionario ${id} foi excluído!`);
  }

  handleResponseError(erro: any): void{
    console.log(erro);
  }

  excluir(id: number): void{
    this.funcionarioService.delete(id).pipe(take(1))
    .subscribe({
      next: (funcionario) => this.handleResponseExcluirOk(id),
      error: erro => this.handleResponseError(erro)
    });
  }
  
  novo(): void{
    this.router.navigate(["/funcionarios/funcionarios-create"]);
  }


}
