import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Livro } from 'src/app/models/livro';
import { LivroService } from 'src/app/services/livro/livro.service';
import { take } from 'rxjs';
import { MensagemService } from 'src/app/services/mensagem/mensagem.service';


@Component({
  selector: 'app-livro-create',
  templateUrl: './livro-create.component.html',
  styleUrls: ['./livro-create.component.css']
})
export class LivroCreateComponent implements OnInit {

  Livro: Livro;
  mensagem: string = "";
  mostrar: boolean = false;

  constructor(private livroService: LivroService,
              private router: Router,
              private mensagemService: MensagemService) {
    this.Livro = new Livro;
   }

  ngOnInit(): void {
  }

  salvar(): void{
    console.log(this.Livro);
    this.livroService.post(this.Livro)
    .pipe(take(1))
    .subscribe({
      next: (livro) => this.handleResponseOK(livro),
      error: erro => this.handleResponseError(erro)
    });
  }

  handleResponseOK(livro: Livro): void{
    this.mostrar = true;
    this.mensagemService.set(`Livro Criado com Sucesso!`);
  }

  handleResponseError(erro: any): void{
    this.mostrar = true;
    console.log(erro);
    console.log(erro.error);
    this.mensagemService.set(`Ocorreu um erro: ${erro.message}`);
  }

  

  voltar(): void{
    this.router.navigate(["/livros"]);
  }

}
