import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";

const site = lume({
  src: "./src",
});

site.use(jsx());

site.add("index.html");
site.add("404.html");

for await (const dirEntry of Deno.readDir("./src/_assets/img")) {
  if (dirEntry.isFile) {
    site.add(`_assets/img/${dirEntry.name}`, `/img/${dirEntry.name}`);
  }
}
site.add("_assets/favicon.ico");
site.add("_assets/css/main.css", "/css/main.css");

export default site;
