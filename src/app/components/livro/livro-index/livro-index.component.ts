
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Livro } from 'src/app/models/livro';
import { LivroService } from 'src/app/services/livro/livro.service';

@Component({
  selector: 'app-livro-index',
  templateUrl: './livro-index.component.html',
  styleUrls: ['./livro-index.component.css']
})
export class LivroIndexComponent implements OnInit {
  Livro: Livro;
  Livros: Livro[];

  constructor(private livroService: LivroService, private router: Router) {
    this.Livros = new Array<Livro>();
    this.Livro = new Livro;
   }

  ngOnInit(): void {
  }

  pesquisar(): void{
    if (this.Livro.Id === 0){
      this.pesquisarTodos();
    }else{
      this.pegarPorId(this.Livro.Id);
    }
  }

  pegarPorId(id: Number){
    this.livroService.getId(id).subscribe({next: (livro)=> this.passaDados(livro)});
  }
  passaDados(livro: Livro){
    this.Livros[0] = livro;
  }

  pesquisarTodos(): void{
    this.livroService.getAll()
    .pipe(take(1))
    .subscribe({
      next: (livros) => this.handleResponseOK(livros),
      error: erro => this.handleResponseError(erro)
    });
  }


  handleResponseOK(livros: Livro[]): void{
    this.Livros = livros;
  }

  handleResponseExcluirOk(id: number): void{
    alert(`O livro ${id} foi excluído!`);
  }

  handleResponseError(erro: any): void{
    console.log(erro);
  }

  excluir(id: number): void{
    this.livroService.delete(id).pipe(take(1))
    .subscribe({
      next: (livro) => this.handleResponseExcluirOk(id),
      error: erro => this.handleResponseError(erro)
    });
  }
  
  novo(): void{
    this.router.navigate(["/livros/livros-create"]);
  }
}
