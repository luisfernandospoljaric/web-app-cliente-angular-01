import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { Livro } from 'src/app/models/livro';
import { LivroService } from 'src/app/services/livro/livro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livro-edit',
  templateUrl: './livro-edit.component.html',
  styleUrls: ['./livro-edit.component.css']
})
export class LivroEditComponent implements OnInit {

  Livro: Livro;

  constructor(private activatedroute:ActivatedRoute, private livroService: LivroService, private router: Router) {
    this.Livro = new Livro();
   }

  ngOnInit(): void {
    this.Livro.Id = Number(this.activatedroute.snapshot.paramMap.get("id"));
    this.pegarPorId(this.Livro.Id);
  }

  pegarPorId(id: Number){
    this.livroService.getId(id).pipe(take(1)).subscribe({next: (livro)=> this.passaDados(livro)});
  }
  passaDados(livro: Livro){
    this.Livro = livro;
  }

  salvar(): void {
    this.livroService.put(this.Livro).pipe(take(1))
    .subscribe({
      next: (livro) => this.handleResponseOK(livro),
      error: erro => this.handleResponseError(erro)
    });
  }

  handleResponseOK(livro: Livro): void{
    this.voltar();
  }

  handleResponseError(erro: any): void{
    console.log(erro);
  }

  voltar(): void {
    this.router.navigate(["/livros"]);
  }
}
