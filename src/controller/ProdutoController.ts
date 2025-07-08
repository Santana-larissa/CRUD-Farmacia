import { Produto } from "../model/produto";

export class ProdutoController {
private produtos: Produto[] = [];

public listarTodos(): void {
    if (this.produtos.length === 0) {
    console.log("Nenhum produto cadastrado.");
    return;
    }

    this.produtos.forEach((produto) => produto.visualizar());
}

public buscarPorCodigo(codigo: number): void {
    const produto = this.produtos.find(p => p.getCodigo() === codigo);

    if (!produto) {
    console.log("Produto não encontrado.");
    return;
    }

    produto.visualizar();
}

public cadastrar(produto: Produto): void {
    this.produtos.push(produto);
    console.log("Produto cadastrado com sucesso!");
}

public atualizar(produto: Produto): void {
    const index = this.produtos.findIndex(p => p.getCodigo() === produto.getCodigo());

    if (index === -1) {
    console.log("Produto não encontrado.");
    return;
    }

    this.produtos[index] = produto;
    console.log("Produto atualizado com sucesso!");
}

public deletar(codigo: number): void {
    const index = this.produtos.findIndex(p => p.getCodigo() === codigo);

    if (index === -1) {
    console.log("Produto não encontrado.");
    return;
    }

    this.produtos.splice(index, 1);
    console.log("Produto removido com sucesso!");
}
}
