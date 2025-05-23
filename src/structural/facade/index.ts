import { HomeTheaterFacade } from "./HomeTheaterFacade";
import { SistemaLuz } from "./SistemaLuz";
import { SistemaSom } from "./SistemaSom";
import { SistemaTV } from "./SistemaTV";

const tv = new SistemaTV();
const luz = new SistemaLuz();
const som = new SistemaSom();

const homeTheater = new HomeTheaterFacade(tv, luz, som);
homeTheater.ligarTudo();
