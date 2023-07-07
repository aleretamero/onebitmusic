const url = 'https://onebitmusic-zeta.vercel.app/';
const title = 'Onebitmusic - Especialistas em eventos músicais';
const description =
  'Na onebitmusic, estamos redefinindo a maneira como experimentamos e nos envolvemos com a música, utilizando tecnologia de realidade virtual (VR) para criar shows e performances que transcendem os limites físicos e levam você a novos patamares de entretenimento musical.';

export const Meta = () => {
  return (
    <>
      {/* Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${url}/images/hero.webp`} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${url}/images/hero.webp`} />
    </>
  );
};
