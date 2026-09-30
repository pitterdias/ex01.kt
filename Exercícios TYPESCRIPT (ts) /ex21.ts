const nome: string = "Ana";
const idade: number = 17;
const estudante: boolean = true;

console.log("APRESENTAÇÃO DE USUÁRIO");
console.log(`Nome: ${nome}`);
console.log(`Idade: ${idade}`);
console.log(`Estudante: ${estudante ? "Sim" : "Não"}`);
```[cite: 4]

### Explicação do Código

* **Declaração de Variáveis**: Define três constantes com tipos explícitos de TypeScript (`string`, `number` e `boolean`)[cite: 4].
* **Interpolação de *Strings***: Utiliza *template literals* (delimitados por crases `` ` ``) para intercalar os valores das variáveis diretamente no texto através da sintaxe `${}`[cite: 4].
* **Operador Ternário**: Na linha 8, a expressão `estudante ? "Sim" : "Não"` verifica o valor do booleano: exibe `"Sim"` se `estudante` for `true` e `"Não"` se for `false`[cite: 4].

### Resultado na Consola

```text
APRESENTAÇÃO DE USUÁRIO
Nome: Ana
Idade: 17
Estudante: Sim
