import { loadCharactersByPage } from './use-cases/loadCharactersByPage.js';
import { Store } from './store/store.js';
import { renderCharacterList } from './presentation/renderCharacterList.js';

const store = new Store();

/**
 * Función principal para gestionar la aplicación de personajes.
 * 
 * @param {HTMLDivElement} element - El elemento donde se mostrará la aplicación
 */
export const charactersApp = async (element) => {
    // Indicamos que estamos cargando personajes
    element.innerHTML = 'Cargando personajes...';

    // Cargamos los personajes de la primera página usando el caso de uso
    await loadCharactersByPage(12);
    
    // Obtenemos los personajes del store y los renderizamos
    const { characters } = store.getState();
    renderCharacterList(characters, element);
};
