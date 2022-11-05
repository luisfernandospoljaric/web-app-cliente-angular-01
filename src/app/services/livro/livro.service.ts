import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, take } from 'rxjs';
import { Livro } from 'src/app/models/livro';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private readonly url: string;


  constructor(private httpClient:HttpClient) {
    this.url = "https://localhost:44335/api/livros";
   }

  getAll(): Observable<Livro[]>{
    return this.httpClient.get<Livro[]>(this.url);
  }

  getId(id: Number): Observable<Livro>{
    return this.httpClient.get<Livro>(this.url+"/"+id);
  }


  post(livro: Livro): Observable<Livro>{
    return this.httpClient.post<Livro>(this.url, livro);
  }

  put(livro: Livro): Observable<Livro>{
    const endpoint = `${this.url}/${livro.Id}`;
    console.log(endpoint);
    return this.httpClient.put<Livro>(endpoint, livro);
  }

  delete(id: number): Observable<Livro>{
    return this.httpClient.delete<Livro>(this.url+"/"+id);
  }

  testando(){

  }

  tester(){
    
  }
}
