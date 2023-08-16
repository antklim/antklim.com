import type { PageData } from "#types";

export default ({ title, children }: PageData) => (
  <html>
    <head>
      <meta charSet="UTF-8" />
      <title>{title}</title>
    </head>
    <body>
      {children}
    </body>
  </html>
);
