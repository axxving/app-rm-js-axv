export class Character {
  /**
   * Modelo para representar un personaje
   * @param {Object} characterDataLike - Datos similares a los del personaje que vienen de la API
   * @param {number} characterDataLike.id - ID del personaje
   * @param {string} characterDataLike.name - Nombre del personaje
   * @param {string} characterDataLike.status - Estado del personaje (vivo, muerto, etc.)
   * @param {string} characterDataLike.species - Especie del personaje
   * @param {string} characterDataLike.type - Tipo del personaje
   * @param {string} characterDataLike.gender - Género del personaje
   * @param {string} characterDataLike.image - URL de la imagen del personaje
   * @param {string} characterDataLike.url - URL del personaje
   * @param {string} characterDataLike.created - Fecha de creación del personaje
   */
  constructor({
    id,
    name,
    status,
    species,
    type,
    gender,
    image,
    url,
    created,
  }) {
    this.id = id;
    this.name = name;
    this.status = status;
    this.species = species;
    this.type = type || 'Unknown';
    this.gender = gender;
    this.image = image;
    this.url = url;
    this.created = created;
  }
}
