import { Helmet } from 'react-helmet-async'

export const MetaTags = ({ title, content }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta
        name='description'
        content={content}
      />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={content} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={content} />
    </Helmet>
  )
}
