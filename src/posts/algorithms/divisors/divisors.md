---
title: "Divisores de um número com Ruby"
date: "2020/05/07"
category: "Ruby"
category_color: "#e02b11"
tags: ["Algoritmo", "Ruby", "Divisores"]
---

![Divisors](./divisors.jpg)

Buscando opções de exercícios fáceis e rápidos pra praticar, me deparei com esse exemplo no qual o objetivo é extrair os números divisores de um número inteiro vindos de um array, ou seja, dado um array de números (arr) e um número inteiro (n), preciso encontrar todos os números que divididos por n me retornem uma divisão exata, isto é, o restante é igual a 0 e retornar um novo array com os divisores de n.

Nesse caso vou utilizar a função select do Ruby que faz uma filtragem dos itens de um array e retorna o próprio item/número caso o resultado do bloco de código passado seja ***true***.

```ruby
arr = [1, 2, 4, 6, 7, 9, 12]

def solution(arr, n)
  arr.select { |i| n % i == 0 }
end

solution(arr, 12)

# => [1, 2, 4, 6, 12]
```

## Conclusão

Um exercício rápido e simples pra praticar e que serve em várias situações do mundo real quando trabalhamos com números. É isso
