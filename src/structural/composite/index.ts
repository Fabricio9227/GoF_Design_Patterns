import { Arquivo } from "./Arquivo";
import { Pasta } from "./Pasta";

const raiz = new Pasta("raiz");
const documentos = new Pasta("documentos");
const imagens = new Pasta("imagens");

documentos.adicionar(new Arquivo("cv.pdf"));
imagens.adicionar(new Arquivo("foto.jpg"));

raiz.adicionar(documentos);
raiz.adicionar(imagens);
raiz.adicionar(new Arquivo("leia-me.txt"));

raiz.mostrar();
