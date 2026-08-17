import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";
import search from "lume/plugins/search.ts";
import prism from "lume/plugins/prism.ts";

import "prismjs/components/prism-zig.js";

const site = lume({
  src: "./src",
  prettyUrls: false,
});

site.use(date());
site.use(search());
site.use(prism({
  theme: {
    name: "tomorrow",
    cssFile: "/css/main.css",
  },
}));

for await (const dirEntry of Deno.readDir("./src/_assets/img")) {
  if (dirEntry.isFile) {
    site.add(`_assets/img/${dirEntry.name}`, `/img/${dirEntry.name}`);
  }
}
site.add("_assets/favicon.ico");
site.add("_assets/css/main.css", "/css/main.css");

export default site;
