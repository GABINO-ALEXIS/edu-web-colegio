class Noticia {
  static contador = localStorage.getItem('contadorNoticia') || 10

  constructor (titulo, contenido, fecha, imagen) {
    this.id = Noticia.contador++
    this.titulo = titulo
    this.contenido = contenido
    this.fecha = fecha
    this.imagen = imagen
    localStorage.setItem('contadorNoticia', Noticia.contador)
  }

  objetoPlano () {
    return {
      id: this.id,
      titulo: this.titulo,
      contenido: this.contenido,
      fecha: this.fecha,
      imagen: this.imagen
    }
  }
}

export default Noticia
