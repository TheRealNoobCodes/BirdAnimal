import { Bird } from './Bird';

class Falcon extends Bird{
    Wingspan: number;
    Color: string;
    Beak:boolean;
    Rateofreproduction:number;
    Endangered: boolean;

     constructor(Wingspan: number, Color: string, Beak: boolean, Rateofreproduction: number, Endangered: boolean, name: string, population: number, age: number, location: string ) {
     super(name,population,age,location)
     this. Wingspan = Wingspan;
     this. Color = Color;
     this. Beak = Beak;
     this. Rateofreproduction = Rateofreproduction
     this. Endangered = Endangered
    }

     FalconWingspanEgo(Wingspan: number): string);
    //return
}