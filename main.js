class Convesor {
	constructor(num) {
		this.num = num;
	}

	valorEntrada(num) {
		let validate = Number(num);
		if (isNaN(validate)) {
			return this.romanoParaDecimal(num.trim().toUpperCase());
		} else {
			return this.decimalParaRomano(Number(num));
		}
	}

	romanoParaDecimal(num) {
		let valor = num.replace(/[^IVXLCDM]/gi, '');
		const input = valor.split('');

		const valoresRomanos = {
			'I': 1,
			'V': 5,
			'X': 10,
			'L': 50,
			'C': 100,
			'D': 500,
			'M': 1000
		};

		let total = 0;

		input.forEach((el, id) => {
			const valAtual = valoresRomanos[el]
			const proxVal = valoresRomanos[input[id + 1]]

			// Se o proximo valor não existir, ou for maior que o valor atual, significa que posso somar o valor atual ao total,
			// Caso o proximo valor exista e seja menor, significa que é uma subtração.
			if (proxVal && valAtual < proxVal) {
				total -= valAtual;
			} else {
				total += valAtual;
			}
		});

		return total;
	}

	decimalParaRomano(num) {
		let mapeamentoRomanos = {
			M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1
		};
		let algarismosRomanos = '';

		Object.keys(mapeamentoRomanos).forEach((el) => {
			if (num >= mapeamentoRomanos[el]) {
				num -= mapeamentoRomanos[el]
				algarismosRomanos += el
			}
		});

		return algarismosRomanos;
	}
}

function numeroEscolhido() {
	entrada = document.getElementById('algarismo').value;
	if (!entrada) {
		return;
	}
	const conversor = new Convesor();
	const resultado = conversor.valorEntrada(entrada);
	document.getElementById('resultado').innerHTML = resultado;
}
