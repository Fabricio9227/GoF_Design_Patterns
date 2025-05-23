import { FabricaDeSoldados } from "./FabricaDeSoldados";

const fabrica = new FabricaDeSoldados();

const soldado1 = fabrica.obterSoldado("arqueiro");
soldado1.exibir();

const soldado2 = fabrica.obterSoldado("arqueiro");
soldado2.exibir();
