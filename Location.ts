export class DetailedLocation {
    private _x: number;
    private _y: number;
    private _name: string;


	constructor(x: number, y: number, name: string) {
        this._x = x;
        this._y = y;
        this._name = name;
	}
    
    /**
     * Getter x
     * @return {number}
     */
	public get x(): number {
		return this._x;
	}

    /**
     * Getter y
     * @return {number}
     */
	public get y(): number {
		return this._y;
	}

    /**
     * Getter name
     * @return {string}
     */
	public get name(): string {
		return this._name;
	}

    /**
     * Setter x
     * @param {number} value
     */
	public set x(value: number) {
		this._x = value;
	}

    /**
     * Setter y
     * @param {number} value
     */
	public set y(value: number) {
		this._y = value;
	}

    /**
     * Setter name
     * @param {string} value
     */
	public set name(value: string) {
		this._name = value;
	}
    
}