class Persona {
  static contador = localStorage.getItem('contador') || 10

  constructor (nombre, ocupacion, foto) {
    this.id = Persona.contador++
    this.nombre = nombre
    this.ocupacion = ocupacion
    this.foto = foto
    localStorage.setItem('contador', Persona.contador)
  }

  objetoPlano () {
    return {
      id: this.id,
      nombre: this.nombre,
      ocupacion: this.ocupacion,
      foto: this.foto
    }
  }
}

export default Persona
