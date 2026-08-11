import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";
import search from "lume/plugins/search.ts";

const site = lume({
  src: "./src",
  prettyUrls: false,
});

site.use(date());
site.use(search());

for await (const dirEntry of Deno.readDir("./src/_assets/img")) {
  if (dirEntry.isFile) {
    site.add(`_assets/img/${dirEntry.name}`, `/img/${dirEntry.name}`);
  }
}
site.add("_assets/favicon.ico");
site.add("_assets/css/main.css", "/css/main.css");

export default site;
