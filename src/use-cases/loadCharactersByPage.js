import { CharacterService } from '../services/CharacterService.js';
import { Store } from '../store/store.js';

const characterService = new CharacterService('https://rickandmortyapi.com/api');
const store = new Store();

/**
 * Caso de uso para cargar personajes de una página específica.
 * 
 * @param {number} page - Número de la página a cargar
 * @returns {Promise<void>}
 */
export const loadCharactersByPage = async (page = 1) => {
    // Actualizamos el estado del store para indicar que estamos cargando
    store.setState({ isLoading: true });

    try {
        const characters = await characterService.getCharacters(page);

        // Actualizamos el store con los personajes obtenidos y la página actual
        store.setState({
            characters: characters,
            currentPage: page,
            isLoading: false
        });

        console.log(`Personajes cargados para la página ${page}:`, characters);
    } catch (error) {
        store.setState({
            isLoading: false,
            error: 'Error al cargar los personajes'
        });
        console.error('Error al cargar personajes:', error);
    }
};
