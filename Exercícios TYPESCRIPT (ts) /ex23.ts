type Produto = { nome: string; preco: number; estoque: number };

const produtos: Produto[] = [
    { nome: "Mouse", preco: 50, estoque: 3 },
    { nome: "Teclado", preco: 90, estoque: 0 },
    { nome: "Cabo USB", preco: 20, estoque: 8 }
];

console.log("PRODUTOS DISPONÍVEIS");
for (const produto of produtos) {
    if (produto.estoque > 0) {
        console.log(`${produto.nome} - R$ ${produto.preco.toFixed(2)}`);
    }
}
```[cite: 6]

### Explicação do Código

* **Definição de Tipo (`type`)**: Define a estrutura `Produto` com as propriedades `nome` (`string`), `preco` (`number`) e `estoque` (`number`)[cite: 6].
* **Array de Objetos**: Cria a lista `produtos` contendo três objetos do tipo `Produto`[cite: 6].
* **Ciclo de Repetição (`for...of`)**: Itera sobre cada elemento do array `produtos`[cite: 6].
* **Validação de Stock**: A condição `produto.estoque > 0` filtra a lista, imprimindo apenas o `"Mouse"` e o `"Cabo USB"`, ignorando o `"Teclado"` por ter stock igual a `0`[cite: 6].

### Resultado na Consola

```text
PRODUTOS DISPONÍVEIS
Mouse - R$ 50.00
Cabo USB - R$ 20.00
