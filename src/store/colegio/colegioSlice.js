import { createSlice } from '@reduxjs/toolkit'

export const estructuraWebColegialSlice = createSlice({
  name: 'estructuraWebColegial',
  initialState: {
    isSaving: false,
    messageSaved: '',
    inicioPage: {},
    historiaPage: {},
    somosPage: {
      planaDirectiva: [
        {
          id: 1,
          foto: 'https://res.cloudinary.com/colegio-inmaculada-concepcion/image/upload/v1713281083/estructura-web-colegial/paginas/somos-page/6769264_60111_hq046j.jpg',
          nombre: 'pedro paz castillo',
          ocupacion: 'director'
        },
        {
          id: 2,
          foto: 'https://res.cloudinary.com/colegio-inmaculada-concepcion/image/upload/v1713281083/estructura-web-colegial/paginas/somos-page/6769264_60111_hq046j.jpg',
          nombre: 'juan ita josefa',
          ocupacion: 'sub-director'
        },
        {
          id: 3,
          foto: 'https://res.cloudinary.com/colegio-inmaculada-concepcion/image/upload/v1713281083/estructura-web-colegial/paginas/somos-page/6769264_60111_hq046j.jpg',
          nombre: 'maria cruz gonzalez',
          ocupacion: 'profesora'
        }
      ]
    },
    galeriaPage: {
      fotos: [
        {
          id: 1,
          url: 'https://res.cloudinary.com/colegio-inmaculada-concepcion/image/upload/v1713281083/estructura-web-colegial/paginas/somos-page/6769264_60111_hq046j.jpg',
          titulo: 'niños jugando'
        },
        {
          id: 2,
          url: 'https://res.cloudinary.com/colegio-inmaculada-concepcion/image/upload/v1713281083/estructura-web-colegial/paginas/somos-page/6769264_60111_hq046j.jpg',
          titulo: 'niños jugando'
        },
        {
          id: 3,
          url: 'https://res.cloudinary.com/colegio-inmaculada-concepcion/image/upload/v1713281083/estructura-web-colegial/paginas/somos-page/6769264_60111_hq046j.jpg',
          titulo: 'niños jugando'
        },
        {
          id: 4,
          url: 'https://res.cloudinary.com/colegio-inmaculada-concepcion/image/upload/v1713281083/estructura-web-colegial/paginas/somos-page/6769264_60111_hq046j.jpg',
          titulo: 'niños jugando'
        },
        {
          id: 5,
          url: 'https://res.cloudinary.com/colegio-inmaculada-concepcion/image/upload/v1713281083/estructura-web-colegial/paginas/somos-page/6769264_60111_hq046j.jpg',
          titulo: 'niños jugando'
        },
        {
          id: 6,
          url: 'https://res.cloudinary.com/colegio-inmaculada-concepcion/image/upload/v1713281083/estructura-web-colegial/paginas/somos-page/6769264_60111_hq046j.jpg',
          titulo: 'niños jugando'
        },
        {
          id: 7,
          url: 'https://res.cloudinary.com/colegio-inmaculada-concepcion/image/upload/v1713281083/estructura-web-colegial/paginas/somos-page/6769264_60111_hq046j.jpg',
          titulo: 'niños jugando'
        }
      ]
    },
    admisionPage: {},
    inicialPage: {},
    primariaPage: {},
    metodologiaPage: {},
    noticiasPage: {
      noticias: [
        {
          imagen: 'https://res.cloudinary.com/colegio-inmaculada-concepcion/image/upload/v1713281083/estructura-web-colegial/paginas/somos-page/6769264_60111_hq046j.jpg',
          fecha: '14-03-2024',
          titulo: 'titulo de la noticia',
          contenido: 'Lorem ipsum dolor sit amet consectetur,met consectetur, met consectetur, met consectetur,met consectetur, met consectetur, adipisicing elit.Tempora quaerat suscipit fuga perspiciatis harumesse iusto quia, voluptas commodi nihil necessitatibusconsequuntur? Consequuntur beatae vero commodi nihilprovident esse fuga?'
        },
        {
          imagen: 'https://res.cloudinary.com/colegio-inmaculada-concepcion/image/upload/v1713281083/estructura-web-colegial/paginas/somos-page/6769264_60111_hq046j.jpg',
          fecha: '14-03-2024',
          titulo: 'titulo de la noticia',
          contenido: 'Lorem ipsum dolor sit amet consectetur,met consectetur, met consectetur, met consectetur,met consectetur, met consectetur, adipisicing elit.Tempora quaerat suscipit fuga perspiciatis harumesse iusto quia, voluptas commodi nihil necessitatibusconsequuntur? Consequuntur beatae vero commodi nihilprovident esse fuga?'
        },
        {
          imagen: 'https://res.cloudinary.com/colegio-inmaculada-concepcion/image/upload/v1713281083/estructura-web-colegial/paginas/somos-page/6769264_60111_hq046j.jpg',
          fecha: '14-03-2024',
          titulo: 'titulo de la noticia',
          contenido: 'Lorem ipsum dolor sit amet consectetur,met consectetur, met consectetur, met consectetur,met consectetur, met consectetur, adipisicing elit.Tempora quaerat suscipit fuga perspiciatis harumesse iusto quia, voluptas commodi nihil necessitatibusconsequuntur? Consequuntur beatae vero commodi nihilprovident esse fuga?'
        },
        {
          imagen: 'https://res.cloudinary.com/colegio-inmaculada-concepcion/image/upload/v1713281083/estructura-web-colegial/paginas/somos-page/6769264_60111_hq046j.jpg',
          fecha: '14-03-2024',
          titulo: 'titulo de la noticia',
          contenido: 'Lorem ipsum dolor sit amet consectetur,met consectetur, met consectetur, met consectetur,met consectetur, met consectetur, adipisicing elit.Tempora quaerat suscipit fuga perspiciatis harumesse iusto quia, voluptas commodi nihil necessitatibusconsequuntur? Consequuntur beatae vero commodi nihilprovident esse fuga?'
        },
        {
          imagen: 'https://res.cloudinary.com/colegio-inmaculada-concepcion/image/upload/v1713281083/estructura-web-colegial/paginas/somos-page/6769264_60111_hq046j.jpg',
          fecha: '14-03-2024',
          titulo: 'titulo de la noticia',
          contenido: 'Lorem ipsum dolor sit amet consectetur,met consectetur, met consectetur, met consectetur,met consectetur, met consectetur, adipisicing elit.Tempora quaerat suscipit fuga perspiciatis harumesse iusto quia, voluptas commodi nihil necessitatibusconsequuntur? Consequuntur beatae vero commodi nihilprovident esse fuga?'
        },
        {
          imagen: 'https://res.cloudinary.com/colegio-inmaculada-concepcion/image/upload/v1713281083/estructura-web-colegial/paginas/somos-page/6769264_60111_hq046j.jpg',
          fecha: '14-03-2024',
          titulo: 'titulo de la noticia',
          contenido: 'Lorem ipsum dolor sit amet consectetur,met consectetur, met consectetur, met consectetur,met consectetur, met consectetur, adipisicing elit.Tempora quaerat suscipit fuga perspiciatis harumesse iusto quia, voluptas commodi nihil necessitatibusconsequuntur? Consequuntur beatae vero commodi nihilprovident esse fuga?'
        },
        {
          imagen: 'https://res.cloudinary.com/colegio-inmaculada-concepcion/image/upload/v1713281083/estructura-web-colegial/paginas/somos-page/6769264_60111_hq046j.jpg',
          fecha: '14-03-2024',
          titulo: 'titulo de la noticia',
          contenido: 'Lorem ipsum dolor sit amet consectetur,met consectetur, met consectetur, met consectetur,met consectetur, met consectetur, adipisicing elit.Tempora quaerat suscipit fuga perspiciatis harumesse iusto quia, voluptas commodi nihil necessitatibusconsequuntur? Consequuntur beatae vero commodi nihilprovident esse fuga?'
        },
        {
          imagen: 'https://res.cloudinary.com/colegio-inmaculada-concepcion/image/upload/v1713281083/estructura-web-colegial/paginas/somos-page/6769264_60111_hq046j.jpg',
          fecha: '14-03-2024',
          titulo: 'titulo de la noticia',
          contenido: 'Lorem ipsum dolor sit amet consectetur,met consectetur, met consectetur, met consectetur,met consectetur, met consectetur, adipisicing elit.Tempora quaerat suscipit fuga perspiciatis harumesse iusto quia, voluptas commodi nihil necessitatibusconsequuntur? Consequuntur beatae vero commodi nihilprovident esse fuga?'
        },
        {
          imagen: 'https://res.cloudinary.com/colegio-inmaculada-concepcion/image/upload/v1713281083/estructura-web-colegial/paginas/somos-page/6769264_60111_hq046j.jpg',
          fecha: '14-03-2024',
          titulo: 'titulo de la noticia',
          contenido: 'Lorem ipsum dolor sit amet consectetur,met consectetur, met consectetur, met consectetur,met consectetur, met consectetur, adipisicing elit.Tempora quaerat suscipit fuga perspiciatis harumesse iusto quia, voluptas commodi nihil necessitatibusconsequuntur? Consequuntur beatae vero commodi nihilprovident esse fuga?'
        }
      ]
    },
    contactenosPage: {}
  },
  reducers: {
    increment: (state /* action */) => {
      state.counter += 1
    }
  }
})

export const { increment } = estructuraWebColegialSlice.actions
