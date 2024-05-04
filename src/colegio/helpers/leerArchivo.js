export const leerArchivo = (archivo) => {
  return new Promise((resolve, reject) => {
    try {
      const leer = new FileReader()
      leer.readAsDataURL(archivo)

      leer.addEventListener('load', (e) => {
        resolve(e.currentTarget.result)
      })

      leer.addEventListener('error', (e) => {
        reject(e)
      })
    } catch (error) {
      reject(new Error('Error al leer el archivo'))
    }
  })
}
