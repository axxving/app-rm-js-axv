
export class EpisodeService {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }

    async getEpisodes(page = 1) {
        try {
            const response = await fetch(`${this.apiUrl}/episode/?page=${page}`);
            const data = await response.json();
            return data.results;
        } catch (error) {
            console.error('Error fetching episodes:', error);
            return [];
        }
    }

    async getEpisodeById(id) {
        try {
            const response = await fetch(`${this.apiUrl}/episode/${id}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(`Error fetching episode with id ${id}:`, error);
            return null;
        }
    }
}
