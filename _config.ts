import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx_preact.ts";

const siteOpts = {
  src: "./src",
};

const site = lume(siteOpts);

site.use(jsx());

export default site;
