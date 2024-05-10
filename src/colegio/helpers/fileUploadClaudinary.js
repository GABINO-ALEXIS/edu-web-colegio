import { ProcessReferenceError } from '../../errors'

export const fileUploadClaudinary = async (file, preset) => {
  if (!file || !preset) return null
  const cloudURL = 'https://api.cloudinary.com/v1_1/colegio-inmaculada-concepcion/upload'

  const formData = new FormData()
  formData.append('file', file)
  formData.append('upload_preset', `upload_${preset}`)

  try {
    const response = await fetch(cloudURL, {
      method: 'POST',
      body: formData
    })
    if (!response) throw new ProcessReferenceError('No se pudo subir la imagen')
    const cloudResp = await response.json()

    return cloudResp.secure_url
  } catch (err) {
    return null
  }
}
