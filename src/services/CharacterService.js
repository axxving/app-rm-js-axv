// Archivo: src/services/CharacterService.js
import { Character } from "../models/character";

export class CharacterService {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }

    async getCharacters(page = 1) {
        try {
            const response = await fetch(`${this.apiUrl}/character/?page=${page}`);
            const data = await response.json();
            
            // Mapeamos los resultados a instancias de Character
            return data.results.map(characterData => new Character(characterData));
        } catch (error) {
            console.error('Error fetching characters:', error);
            return [];
        }
    }
}
