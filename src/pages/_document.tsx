import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
    DocumentInitialProps,
  } from 'next/document'


  class MyDocument extends Document {
    static async getInitialProps(
      ctx: DocumentContext
    ): Promise<DocumentInitialProps> {
      const originalRenderPage = ctx.renderPage
   
      // Run the React rendering logic synchronously
      ctx.renderPage = () =>
        originalRenderPage({
          // Useful for wrapping the whole react tree
          enhanceApp: (App) => App,
          // Useful for wrapping in a per-page basis
          enhanceComponent: (Component) => Component,
        })
   
      // Run the parent `getInitialProps`, it now includes the custom `renderPage`
      const initialProps = await Document.getInitialProps(ctx)
   
      return initialProps
    }
   
    render() {
      return (
        <Html lang="en">
          <Head>
            <title>Adam Hilario | A Review</title>
            <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Oswald:wght@200..700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
          </Head>
          <body>
            <div id='site-wrapper'>
              <Main />
              <NextScript />
            </div>
          </body>
        </Html>
      )
    }
  }
   
  export default MyDocument