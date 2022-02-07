class TypeOfBird {

    private weight: number;
    private lifespan: number; 
    private height: number;
    private color: string; 
    private hunter: boolean;  


    constructor(weight:number, lifespan: number, height: number, color: string, hunter: boolean) {
        this.weight = weight;
        this.lifespan = lifespan;
        this.height = height; 
        this.color = color; 
        this.hunter = hunter; 
    
    }

    BaldEagle(color: string, lifespan: number): string {
        this.color = color 
        this.lifespan = lifespan 
        if (color = "yellow", lifespan = 35)
        return "This is a Bald Eagle "
    }





}

