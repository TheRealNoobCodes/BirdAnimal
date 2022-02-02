export class Bird {

    private location: string;
    age: number;
    population: number; 
    name: string; 

    constructor(name: string, population: number, age: number, location: string ) {
        this.name = name;
        this.population = population; 
        this.age = age; 
        this.location = location; 
    }

    getLocation() : string {
        return "Something random"

    }

    getBird() : string {
        return "This Bird is a ____" 
    }

    

    getHabitat() : string {
        return "This bird lives in North America"
    }

    //countCubes(userNumOfCubes: number):  string {
    //    this.numOfCubes = userNumOfCubes;
    //    return "You have" + userNumOfCubes + "cubes!";
    //}



}