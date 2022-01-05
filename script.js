function calculadora() {
    const operacao = Number(prompt("Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - Resto da divisão (%)\n 6 - Potenciação (^)"));

    if (!operacao || operacao >= 7 || operacao <= 0) {
        alert("Operação inválida!");
        calculadora();
    } else {
        let n1 = Number(prompt("Insira o primeiro valor: "));
        let n2 = Number(prompt("Insira o segundo valor: "));
        let resultado;

        if (!n1 || !n2) {
            alert("Parâmetros inválidos!")
            calculadora();
        } else {

            if (operacao == 1) {
                soma();
            } else if (operacao == 2) {
                subtracao();
            } else if (operacao == 3) {
                multiplicacao();
            } else if (operacao == 4) {
                divisaoReal();
            } else if (operacao == 5) {
                restoDivisao();
            } else if (operacao == 6) {
                potenciacao();
            }

            function soma() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao();
            }

            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOperacao();
            }

            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                novaOperacao();
            }

            function divisaoReal() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOperacao();
            }

            function restoDivisao() {
                resultado = n1 % n2;
                alert(`${n1} % ${n2} = ${resultado}`);
                novaOperacao();
            }

            function potenciacao() {
                resultado = n1 ** n2;
                alert(`${n1} ^ ${n2} = ${resultado}`);
                novaOperacao();
            }

            function novaOperacao() {
                let opcao = prompt("Deseja fazer outra operação?\n 1 - Sim\n 2 - Não");

                if (opcao == 1) {
                    calculadora();
                } else if (opcao == 2) {
                    alert("Obrigado por utilizar a calculadora!")
                } else {
                    alert("Digite uma opção válida!")
                    novaOperacao();
                }
            }
        }
    }

}

calculadora();