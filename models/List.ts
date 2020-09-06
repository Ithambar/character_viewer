import { v4 } from "uuid";
import { Character } from "./Character";

export class List {
	private _id: string = "";
	private _name: string = "";
	private _characters: Array<Character> = [];

	constructor() {
		return this;
	}

	init(name?: string): List {
		this._name = name || this._name;
		this._id = v4();
		return this;
	}

	initFromJSON(json: string): List {
		const parsedJSON = JSON.parse(json) as { id: string; name: string; characters: Array<Character> };
		this._id = parsedJSON.id;
		this._name = parsedJSON.name;
		this.characters = parsedJSON.characters;
		this._characters = [];
		parsedJSON.characters.forEach((character) => {
			this._characters.push(new Character().initFromJSON(JSON.stringify(character)));
		});
		return this;
	}

	toJSON(): string {
		const characters: Array<string> = [];
		this._characters.forEach((character) => {
			characters.push(character.toJSON());
		});
		return JSON.stringify({ id: this._id, name: this._id, characters });
	}

	get id() {
		return this._id;
	}

	set id(id: string) {
		this._id = id;
	}

	get name() {
		return this._name;
	}

	set name(name: string) {
		this._name = name;
	}

	get characters(): Array<Character> {
		return this._characters;
	}

	set characters(characters: Array<Character>) {
		this._characters = characters;
	}
}
