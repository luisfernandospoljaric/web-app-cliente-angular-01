import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario/funcionario.service';

@Component({
  selector: 'app-funcionario-edit',
  templateUrl: './funcionario-edit.component.html',
  styleUrls: ['./funcionario-edit.component.css']
})
export class FuncionarioEditComponent implements OnInit {

  Funcionario: Funcionario;

  constructor(private activatedRoute: ActivatedRoute, private funcionarioService: FuncionarioService, private router: Router) {
    this.Funcionario = new Funcionario();
   }

  ngOnInit(): void {
    this.Funcionario.Id = Number(this.activatedRoute.snapshot.paramMap.get("id"));
    this.pegarPorId(this.Funcionario.Id);
  }

  pegarPorId(id: Number){
    this.funcionarioService.getId(id).pipe(take(1)).subscribe({next: (funcionario)=> this.passaDados(funcionario)});
  }
  passaDados(funcionario: Funcionario){
    this.Funcionario = funcionario;
  }

  salvar(): void {
    this.funcionarioService.put(this.Funcionario).pipe(take(1))
    .subscribe({
      next: (funcionario) => this.handleResponseOK(funcionario),
      error: erro => this.handleResponseError(erro)
    });
  }

  handleResponseOK(funcionario: Funcionario): void{
    this.voltar();
  }

  handleResponseError(erro: any): void{
    console.log(erro);
  }

  voltar(): void {
    this.router.navigate(["/funcionarios"]);
  }
}

