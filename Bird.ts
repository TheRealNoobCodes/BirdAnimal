import { DetailedLocation } from "./Location";
export class Bird {

    private _location: DetailedLocation;  
    
    age: number;
    population: number; 
    name: string; 

    constructor(name: string, population: number, age: number, location: DetailedLocation) {
        this.name = name;
        this.population = population; 
        this.age = age; 
        this._location = location; 
    }
//We could add something like the type of animals they eat?
//The amount that are domesticated vs Wild Birds? 
    getLocation() : string {
        return "This bird is located at " + this._location.name + ", which is located at these coordinates (x:" + this._location.x + ", y:" + this._location.y + ")";
    }

    getBird() : string {
        return "This Bird is a ____" 
    }

    getHabitat() : string {
        return "This bird lives in North America"
    }
}