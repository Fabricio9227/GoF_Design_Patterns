import { Cafe } from "./Cafe";
import { Leite } from "./Leite";

const bebida = new Leite(new Cafe());

console.log(`${bebida.descricao()} - R$ ${bebida.preco()}`);
