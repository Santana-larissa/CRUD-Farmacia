// src/menu.ts

import readlineSync from 'readline-sync';
import { ProdutoController } from './controller/ProdutoController';
import { Livro } from './model/Livro';

let controller = new ProdutoController();
let opcao: number;

do {
console.log("\n🛒 Loja Virtual - Menu");
console.log("1 - Cadastrar Livro");
console.log("2 - Listar Produtos");
console.log("3 - Buscar Produto por Código");
console.log("4 - Atualizar Produto");
console.log("5 - Remover Produto");
console.log("0 - Sair");

opcao = Number(readlineSync.question("Escolha uma opcao: "));

switch (opcao) {
    case 1:
    try {
        const codigo = Number(readlineSync.question("Codigo: "));
        const nome = readlineSync.question("Nome: ");
        const preco = Number(readlineSync.question("Preco: "));
        const estoque = Number(readlineSync.question("Estoque: "));
        const autor = readlineSync.question("Autor: ");
        const editora = readlineSync.question("Editora: ");

        if (preco < 0 || estoque < 0) throw new Error("Preco e estoque devem ser positivos!");

        const livro = new Livro(codigo, nome, preco, estoque, autor, editora);
        controller.cadastrar(livro);
    } catch (error) {
        console.log(`Erro: ${(error as Error).message}`);
    }
    break;

    case 2:
    controller.listarTodos();
    break;

    case 3:
    const codigoBusca = Number(readlineSync.question("Codigo do produto: "));
    controller.buscarPorCodigo(codigoBusca);
    break;

    case 4:
    try {
        const codigo = Number(readlineSync.question("Codigo do produto a atualizar: "));
        const nome = readlineSync.question("Novo nome: ");
        const preco = Number(readlineSync.question("Novo preco: "));
        const estoque = Number(readlineSync.question("Novo estoque: "));
        const autor = readlineSync.question("Novo autor: ");
        const editora = readlineSync.question("Nova editora: ");

        if (preco < 0 || estoque < 0) throw new Error("Preço e estoque devem ser positivos!");

        const novoLivro = new Livro(codigo, nome, preco, estoque, autor, editora);
        controller.atualizar(novoLivro);
    } catch (error) {
        console.log(`Erro: ${(error as Error).message}`);
    }
    break;

    case 5:
    const codigoDel = Number(readlineSync.question("Codigo do produto a remover: "));
    controller.deletar(codigoDel);
    break;

    case 0:
    console.log("Encerrando o programa...");
    break;

    default:
    console.log("Opcao invalida!");
}
} while (opcao !== 0);
