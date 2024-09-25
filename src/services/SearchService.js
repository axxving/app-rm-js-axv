// Archivo: src/services/SearchService.js

export class SearchService {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }

    async searchCharacters(query) {
        try {
            const response = await fetch(`${this.apiUrl}/character/?name=${query}`);
            const data = await response.json();
            return data.results;
        } catch (error) {
            console.error('Error searching characters:', error);
            return [];
        }
    }
}
