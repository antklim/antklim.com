export default (
  { title, children, comp }: Lume.Data,
  _helpers: Lume.Helpers,
) => (
  <>
    {{ __html: "<!DOCTYPE html>" }}
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="description" content="Anton Klimenko web site." />
        <meta name="author" content="Anton Klimenko" />
        <meta
          name="keywords"
          content="anton klimenko software programming go golang node nodejs technology internet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#fafafa" />

        <title>{title}</title>

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Major+Mono+Display&family=Open+Sans&family=PT+Mono&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css"
        />
        <link rel="stylesheet" href="css/main.css" />
        <link rel="shortcut icon" href="favicon.ico" />
      </head>
      <body>
        <div id="root">
          <div class="container">
            <comp.Header />
            <comp.Content>{children}</comp.Content>
            <comp.Footer />
          </div>
        </div>
      </body>
    </html>
  </>
);
