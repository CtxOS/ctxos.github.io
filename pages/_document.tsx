import { ServerStyleSheets } from '@mui/styles'
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { Children } from 'react'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            as="style"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link rel="stylesheet" href="https://use.typekit.net/adk3ies.css" />
          <style>{`
            body {
              opacity: 0;
              transition: opacity 0.2s ease-in-out;
            }
            body.loaded {
              opacity: 1;
            }
          `}</style>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.addEventListener('load', function() {
                  document.body.classList.add('loaded');
                });
              `
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }

  static async getInitialProps(ctx: DocumentContext) {
    const sheets = new ServerStyleSheets()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheets.collect(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: [...Children.toArray(initialProps.styles), sheets.getStyleElement()]
      }
    } catch (error) {
      console.error('Error in document getInitialProps:', error)
      throw error
    }
  }
}
