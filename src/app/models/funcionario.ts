export class Funcionario{
    Id!: number;
    Nome: string;
    DataNascimento: Date;

    constructor(){
        this.Id = 0;
        this.Nome = "";
        this.DataNascimento = new Date(0/0/0);
    }

}


