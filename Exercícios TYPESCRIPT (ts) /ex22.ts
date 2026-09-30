function calcularTotal(preco: number, quantidade: number): number {
    return preco * quantidade;
}

const produto: string = "Teclado";
const preco: number = 80;
const quantidade: number = 2;
const total: number = calcularTotal(preco, quantidade);

console.log(`Produto: ${produto}`);
console.log(`Quantidade: ${quantidade}`);
console.log(`Total: R$ ${total.toFixed(2)}`);
```[cite: 5]

### Explicação do Código

* **Função de Cálculo**: A função `calcularTotal` aceita dois parâmetros do tipo `number` (`preco` e `quantidade`) e devolve o resultado da multiplicação entre eles[cite: 5].
* **Declaração de Constantes**: Define `produto` (`"Teclado"`), `preco` (`80`) e `quantidade` (`2`), atribuindo o retorno da função à constante `total`[cite: 5].
* **Formatação de Saída**: Utiliza *template literals* para imprimir as informações na consola e o método `.toFixed(2)` para formatar o valor do total com duas casas decimais[cite: 5].

### Resultado na Consola

```text
Produto: Teclado
Quantidade: 2
Total: R$ 160.00
