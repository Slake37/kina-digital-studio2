/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://kinadigitalstudio.com",
  generateRobotsTxt: true, // (optional)
  changefreq: "daily",
  priority: 0.7,
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://kinadigitalstudio.com/server-sitemap-index.xml", // <==== Add here
    ],
  },
};
