import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        {/* Primary Meta Tags */}
        <meta
          name="title"
          content="Onebitmusic - Especialistas em eventos músicais"
        />
        <meta
          name="description"
          content=" Na onebitmusic, estamos redefinindo a maneira como experimentamos e
          nos envolvemos com a música, utilizando tecnologia de realidade
          virtual (VR) para criar shows e performances que transcendem os
          limites físicos e levam você a novos patamares de entretenimento
          musical."
        />

        {/* Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io" />
        <meta
          property="og:title"
          content="Onebitmusic - Especialistas em eventos músicais"
        />
        <meta
          property="og:description"
          content=" Na onebitmusic, estamos redefinindo a maneira como experimentamos e
          nos envolvemos com a música, utilizando tecnologia de realidade
          virtual (VR) para criar shows e performances que transcendem os
          limites físicos e levam você a novos patamares de entretenimento
          musical."
        />
        <meta
          property="og:image"
          content="https://metatags.io/images/meta-tags.png"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io" />
        <meta
          property="twitter:title"
          content="Onebitmusic - Especialistas em eventos músicais"
        />
        <meta
          property="twitter:description"
          content=" Na onebitmusic, estamos redefinindo a maneira como experimentamos e
          nos envolvemos com a música, utilizando tecnologia de realidade
          virtual (VR) para criar shows e performances que transcendem os
          limites físicos e levam você a novos patamares de entretenimento
          musical."
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/images/meta-tags.png"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Raleway:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
