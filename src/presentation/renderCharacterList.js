/**
 * Función para renderizar una lista de personajes en el DOM.
 * 
 * @param {Array} characters - Lista de personajes a renderizar
 * @param {HTMLDivElement} element - El elemento donde se insertará la lista de personajes
 */
export const renderCharacterList = (characters, element) => {
    // Si no hay personajes, mostramos un mensaje alternativo
    if (characters.length === 0) {
        element.innerHTML = '<p>No se encontraron personajes.</p>';
        return;
    }

    // Generamos el HTML para cada personaje en un <h2>
    const charactersHtml = characters.map(character => `
        <h2>${character.name}</h2>
    `).join('');

    // Insertamos el HTML generado en el elemento
    element.innerHTML = `
        <div class="character-list">
            ${charactersHtml}
        </div>
    `;
};
