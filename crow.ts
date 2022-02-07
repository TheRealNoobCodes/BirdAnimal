import { Bird } from './Bird';

class crow extends Bird {
    iq: number;
    lifeSpan: number;

    Beak: Boolean; 
        constructor(name: string, population: number, age: number, location: string, iq: number, lifespan: number ) {
        super(name, population, age, location );
        this.lifeSpan = lifespan;
    }
}