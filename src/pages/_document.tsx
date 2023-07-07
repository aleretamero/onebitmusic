import { Html, Head, Main, NextScript } from 'next/document';
import { Meta } from '@/components/Meta';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <Meta />

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
