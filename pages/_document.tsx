import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="ar" dir="rtl">
        <Head>
          {/* Preload critical fonts */}
          <link
            rel="preload"
            href="/fonts/geist-sans-arabic-400.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          
          {/* Add resource hints */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link rel="dns-prefetch" href="https://api.whatsapp.com" />
          <link rel="preconnect" href="https://res.cloudinary.com" />
          
          {/* Add browser hints for better performance */}
          <meta httpEquiv="x-dns-prefetch-control" content="on" />
          
          {/* Add cache control headers */}
          <meta httpEquiv="Cache-Control" content="public, max-age=31536000, immutable" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;