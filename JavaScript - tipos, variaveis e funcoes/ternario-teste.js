const nome = "Leo";
const idade = 17;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

const primeiroPedido = `${nome} diz: "Por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`;

console.log(primeiroPedido);