require("babel-register")({
  presets: ["es2015", "react"],
});

const router = require("./SitemapRouter").default;
const Sitemap = require("react-router-sitemap").default;

function generateSitemap() {
  return new Sitemap(router)
    .build("http://kwd.co.kr/")
    .save("./public/sitemap.xml");
}

generateSitemap();
