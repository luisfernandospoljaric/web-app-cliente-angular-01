import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, take } from 'rxjs';
import { Funcionario } from 'src/app/models/funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private readonly url: string;
  
  
  constructor(private httpClient: HttpClient) {
    this.url = "https://localhost:44373/api/funcionarios"
   }
   getAll(): Observable<Funcionario[]>{
    return this.httpClient.get<Funcionario[]>(this.url);
  }

  getId(id: Number): Observable<Funcionario>{
    return this.httpClient.get<Funcionario>(this.url+"/"+id);
  }


  post(funcionario: Funcionario): Observable<Funcionario>{
    return this.httpClient.post<Funcionario>(this.url, funcionario);
  }

  put(funcionario: Funcionario): Observable<Funcionario>{
    const endpoint = `${this.url}/${funcionario.Id}`;
    console.log(endpoint);
    return this.httpClient.put<Funcionario>(endpoint, funcionario);
  }

  delete(id: number): Observable<Funcionario>{
    return this.httpClient.delete<Funcionario>(this.url+"/"+id);
  }
}
