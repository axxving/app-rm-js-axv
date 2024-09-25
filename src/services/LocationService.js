// Archivo: src/services/LocationService.js

export class LocationService {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }

    async getLocations(page = 1) {
        try {
            const response = await fetch(`${this.apiUrl}/location/?page=${page}`);
            const data = await response.json();
            return data.results; // Retornamos las localizaciones
        } catch (error) {
            console.error("Error fetching locations:", error);
            return [];
        }
    }

    async getLocationById(id) {
        try {
            const response = await fetch(`${this.apiUrl}/location/${id}`);
            const data = await response.json();
            return data; // Retornamos la localización
        } catch (error) {
            console.error(`Error fetching location with id ${id}:`, error);
            return null;
        }
    }
}
