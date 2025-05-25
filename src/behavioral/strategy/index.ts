import { AirplaneStrategy } from "./AirPlaneStrategy";
import { BusStrategy } from "./BusStrategy";
import { CarStrategy } from "./CarStrategy";
import { TravelPlanner } from "./TravelPlanner";

const planner = new TravelPlanner();
const distanceShort = 300; // km
const distanceLong = 1200; // km

console.log(`Planejando viagem de ${distanceShort} km.\n`);

// Usando carro
planner.setStrategy(new CarStrategy());
planner.calculateRouteTime(distanceShort);

console.log(""); // Espaçamento

// Usando ônibus para a mesma distância curta
planner.setStrategy(new BusStrategy());
planner.calculateRouteTime(distanceShort);

console.log(`\nPlanejando viagem de ${distanceLong} km.\n`);

// Usando avião para longa distância
planner.setStrategy(new AirplaneStrategy());
planner.calculateRouteTime(distanceLong);
