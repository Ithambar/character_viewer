import { v4 } from "uuid";

export class CharacterImage {
	constructor(src: string) {
		this.src = src;
	}

	src: string = "";
	main: boolean = false;

	fromJSON(json: string): CharacterImage {
		const parsedJSON = JSON.parse(json) as { src: string; main: boolean };
		this.src = parsedJSON.src;
		this.main = parsedJSON.main;
		return this;
	}

	toJSON(): string {
		return JSON.stringify({ src: this.src, main: this.main });
	}
}

export class SubCharacter {
	id: string = "";
	name: string = "";
	origin: string = "";
	images: Array<CharacterImage> = [];
	attributeArrays: Map<string, string> = new Map();

	constructor() {
		return this;
	}

	init(id?: string): SubCharacter {
		this.id = id || v4();
		return this;
	}

	fromJSON(json: string): SubCharacter {
		const parsedJSON = JSON.parse(json) as { id: string; name: string; origin: string; images: Array<CharacterImage>; attributeArrays: Map<string, string> };
		this.id = parsedJSON.id;
		this.name = parsedJSON.name;
		this.origin = parsedJSON.origin;
		this.images = parsedJSON.images;
		this.attributeArrays = parsedJSON.attributeArrays;
		return this;
	}

	toJSON(): string {
		return JSON.stringify({ id: this.id, name: this.name, origin: this.origin, images: this.images, attributeArrays: this.attributeArrays });
	}

	mainImage() {
		return this.images.filter((image) => {
			return image.main;
		})[0];
	}
}
export class Character {
	id: string = "";
	name: string = "";
	origin: string = "";
	images: Array<CharacterImage> = [];
	attributeArrays: Map<string, string> = new Map();
	subCharacterArrays: Map<string, Array<SubCharacter>> = new Map();

	constructor() {
		return this;
	}

	init(id?: string): Character {
		this.id = id || v4();
		return this;
	}

	fromJSON(json: string): Character {
		const parsedJSON = JSON.parse(json) as { id: string; name: string; origin: string; images: Array<CharacterImage>; attributeArrays: Map<string, string>; subCharacterArrays: Map<string, Array<SubCharacter>> };
		this.id = parsedJSON.id;
		this.name = parsedJSON.name;
		this.origin = parsedJSON.origin;
		this.images = parsedJSON.images;
		this.attributeArrays = parsedJSON.attributeArrays;
		this.subCharacterArrays = new Map();

		if (parsedJSON.subCharacterArrays.size) {
			parsedJSON.subCharacterArrays.forEach((subCharacterArray, type) => {
				const parsedSubCharacterArray: Array<SubCharacter> = [];
				subCharacterArray.forEach((subCharacter) => {
					parsedSubCharacterArray.push(new SubCharacter().fromJSON(JSON.stringify(subCharacter)));
				});

				this.subCharacterArrays.set(type, parsedSubCharacterArray);
			});
		}

		return this;
	}

	toJSON(): string {
		const subCharacterArrays: Map<string, string> = new Map();
		this.subCharacterArrays.forEach((subCharacterArray, type) => {
			subCharacterArray.forEach((subCharacter) => {
				subCharacterArrays.set(type, subCharacter.toJSON());
			});
		});
		return JSON.stringify({ id: this.id, name: this.name, origin: this.origin, images: this.images, attributeArrays: this.attributeArrays, subCharacterArrays });
	}
}