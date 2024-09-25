import { Character } from "../models/character";

export class CharacterDetailService {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }

    async getCharacterById(id) {
        try {
            const response = await fetch(`${this.apiUrl}/character/${id}`);
            const data = await response.json();
            return new Character(data); // Retornamos una instancia del modelo Character
        } catch (error) {
            console.error(`Error fetching character with id ${id}:`, error);
            return null;
        }
    }
}
