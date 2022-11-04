import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  private Mensagem: string;

  constructor() {
    this.Mensagem = "";
   }

   set(mensagem: string): void{
    this.Mensagem = mensagem;
   }

   get(): string {
    return this.Mensagem;
   }

   limpar(): void {
    this.Mensagem = "";
   }
}
