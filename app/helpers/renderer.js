const api = {};

api.renderPage = (page) => {
  if (!page) {
    return renderPage({
      title: "Strona nie została znaleziona",
      components: []
    });
  }

  const pageRenderer = require('akai-onepage/src/js/pageRenderer');
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>${ page.title }</title>
      <link href="/assets/main.css" rel="stylesheet"></head>
      <body>
        ${ pageRenderer.render(page) }
      </body>
    </html>
  `;
};

module.exports = api;