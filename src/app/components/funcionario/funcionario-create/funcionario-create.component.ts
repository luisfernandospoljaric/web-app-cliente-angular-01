import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario/funcionario.service';

@Component({
  selector: 'app-funcionario-create',
  templateUrl: './funcionario-create.component.html',
  styleUrls: ['./funcionario-create.component.css']
})
export class FuncionarioCreateComponent implements OnInit {

  Funcionario: Funcionario;

  constructor(private funcionarioService: FuncionarioService, private router: Router) {
    this.Funcionario = new Funcionario;
   }

  ngOnInit(): void {
  }

  salvar(): void{
    console.log(this.Funcionario);
    this.funcionarioService.post(this.Funcionario)
    .pipe(take(1))
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



  voltar(): void{
    this.router.navigate(["/funcionarios"]);
  }

}
