import { Produto } from "./produto";

export class Livro extends Produto {
constructor(
    codigo: number,
    nome: string,
    preco: number,
    estoque: number,
    private autor: string,
    private editora: string
) {
    super(codigo, nome, preco, estoque);
}

public visualizar(): void {
    console.log(`\n Livro:
Código: ${this.getCodigo()}
Nome: ${this.getNome()}
Preço: R$${this.getPreco().toFixed(2)}
Estoque: ${this.getEstoque()}
Autor: ${this.autor}
Editora: ${this.editora}`);
}
}