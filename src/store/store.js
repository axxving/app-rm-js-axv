export class Store {
    constructor() {
        this.state = {
            characters: [],   // Almacenaremos los personajes obtenidos
            currentPage: 1,   // Página actual para la paginación
            isLoading: false, // Estado de carga
            error: null       // Para manejar errores
        };
    }

    // Método para obtener el estado actual
    getState() {
        return this.state;
    }

    // Método para actualizar el estado (usaremos un simple merge de objetos)
    setState(newState) {
        this.state = { ...this.state, ...newState };
    }

    // Método para restablecer el estado si es necesario
    resetState() {
        this.state = {
            characters: [],
            currentPage: 1,
            isLoading: false,
            error: null
        };
    }
}
