import { Bird } from './Bird';

//let Pigeon = new Bird("Pigeon", 11200, 12, "North America") 

class Pigeon extends Bird {
    lifeSpan: number;
    color: string; 
    beak: boolean; 
    amountOfFeet: number; 
    coos: boolean;

    constructor(lifespan: number, color: string, beak: boolean, amountoffeet: number, coos:boolean, name: string, population: number, age: number, location: string ) {
        super(name, population, age, location );
        this.lifeSpan = lifespan; 
        this.color = color; 
        this.beak = beak; 
        this.amountOfFeet = amountoffeet; 
        this.coos = coos; 
    }

    MakesANoise(Coos: boolean): string { 
        return "Coo Coo"
    }

    IsItAnIcePigeon(LifeSpan: number, Color: string): string {
        let x = LifeSpan
        let y = Color 
        if (x = 10, y = "white") 
        return "That seems to be an Ice Pigeon, those are pretty rare"
    }

    IsItAnEgyptionSwiftPigeon(Beak: string, Color: string, Coos: boolean ): string {
        let BeakLength = Beak 
        let WhatColorIsIt = Color 
        let DoesItCoo = Coos 
        return ""
        
    }
}