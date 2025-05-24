import { TomadaAntiga } from "./TomadaAntiga";
import { AdaptadorTomada } from "./AdaptadorTomada";
import { TomadaNova } from "./TomadaNova";

// O sistema espera uma TomadaNova
let tomadaNova: TomadaNova = new AdaptadorTomada(new TomadaAntiga());
tomadaNova.conectarNovoPino();