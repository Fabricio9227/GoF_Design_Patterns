import { ProxyDeSeguranca } from "./ProxyDeSeguranca";

const usuario1 = new ProxyDeSeguranca("convidado");
usuario1.executar();

const usuario2 = new ProxyDeSeguranca("admin");
usuario2.executar();
