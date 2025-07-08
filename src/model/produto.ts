export abstract class Produto {

constructor(
    private codigo: number,
    private nome: string,
    private preco: number,
    private estoque: number
) {}

public getCodigo(): number {
    return this.codigo;
}

public getNome(): string {
    return this.nome;
}

public setNome(nome: string): void {
    this.nome = nome;
}

public getPreco(): number {
    return this.preco;
}

public setPreco(preco: number): void {
    this.preco = preco;
}

public getEstoque(): number {
    return this.estoque;
}

public setEstoque(estoque: number): void {
    this.estoque = estoque;
}

public abstract visualizar(): void;

}
