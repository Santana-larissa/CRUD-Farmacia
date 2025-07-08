export class ProdutoController {
constructor() {
    this.produtos = [];
}

gerarId() {
    return this.produtos.length > 0 ? this.produtos[this.produtos.length - 1].id + 1 : 1;
}

cadastrar(produto) {
    this.produtos.push(produto);
    console.log("Produto cadastrado com sucesso!");
}

listarTodos() {
    this.produtos.forEach(p => p.visualizar());
}

procurarPorId(id) {
    const produto = this.produtos.find(p => p.id === id);
    if (produto) produto.visualizar();
    else console.log(`Produto com ID ${id} não encontrado.`);
}

atualizar(produtoAtualizado) {
    const index = this.produtos.findIndex(p => p.id === produtoAtualizado.id);
    if (index !== -1) {
    this.produtos[index] = produtoAtualizado;
    console.log("Produto atualizado com sucesso!");
    } else {
    console.log(`Produto com ID ${produtoAtualizado.id} não encontrado.`);
    }
}

deletar(id) {
    const index = this.produtos.findIndex(p => p.id === id);
    if (index !== -1) {
    this.produtos.splice(index, 1);
    console.log("Produto removido com sucesso.");
    } else {
    console.log(`Produto com ID ${id} não encontrado.`);
    }
}
}
