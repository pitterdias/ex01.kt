using System;
using System.Globalization;

Console.Write("Salário base (ex.: 1500.00): ");
double salario = double.Parse(Console.ReadLine() ?? "0", CultureInfo.InvariantCulture);

Console.Write("Comissão (%): ");
double percentual = double.Parse(Console.ReadLine() ?? "0", CultureInfo.InvariantCulture);

if (salario < 0 || percentual < 0) {
    Console.WriteLine("Valores inválidos.");
} else {
    double comissao = salario * percentual / 100;
    Console.WriteLine($"Comissão: R$ {comissao:F2}");
    Console.WriteLine($"Total: R$ {salario + comissao:F2}");
}
```[cite: 3]

### Funcionamento do Código

* **Leitura de Dados**: Solicita o salário base e a percentagem da comissão, utilizando `CultureInfo.InvariantCulture` para que o ponto decimal seja interpretado corretamente[cite: 3].
* **Validação de Entrada**: Verifica através do bloco `if` se algum dos valores inseridos é negativo (`< 0`), informando o utilizador caso exista um valor incorreto[cite: 3].
* **Cálculo e Resultado**: Calcula a comissão correspondente no bloco `else` e exibe o valor da comissão e o total final formatados com duas casas decimais (`:F2`)[cite: 3].
