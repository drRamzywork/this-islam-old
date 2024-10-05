// import { SitemapStream, streamToPromise } from "sitemap";

// export default async (req, res) => {
//   res.setHeader("Content-Type", "application/xml");

//   // Assuming your site supports these languages
//   const languages = ["en", "ar", "fr"];

//   const links = [
//     { url: "/", changefreq: "daily", priority: 0.7 },
//     // You can add more static pages here, including localized versions
//   ];

//   // Create a stream for the sitemap
//   const stream = new SitemapStream({ hostname: "https://thisislam.net" });

//   // Fetch dynamic paths and add language variations
//   const dynamicPaths = await fetchDynamicPaths(); // Fetch base paths
//   dynamicPaths.forEach((path) => {
//     languages.forEach((lang) => {
//       links.push({
//         url: `/${lang}${path}`, // Prepend language code to the path
//         changefreq: "weekly",
//         priority: 0.5,
//       });
//     });
//   });

//   // Write links to the sitemap stream
//   links.forEach((link) => stream.write(link));
//   stream.end();

//   // Convert stream to XML and send it in the response
//   streamToPromise(stream)
//     .then((sm) => res.send(sm.toString()))
//     .catch((error) => {
//       console.error(error);
//       res.status(500).end();
//     });
// };

// async function fetchDynamicPaths() {
//   // Fetch your paths from a database or other source
//   return [
//     "/path-1",
//     "/path-2", // Example dynamic paths
//   ];
// }

import { SitemapStream, streamToPromise } from "sitemap";

// Name the arrow function and export it
const generateSitemap = async (req, res) => {
  res.setHeader("Content-Type", "application/xml");

  // Assuming your site supports these languages
  const languages = ["en", "ar", "fr"];

  const links = [
    { url: "/", changefreq: "daily", priority: 0.7 },
    // You can add more static pages here, including localized versions
  ];

  // Create a stream for the sitemap
  const stream = new SitemapStream({ hostname: "https://thisislam.net" });

  // Fetch dynamic paths and add language variations
  const dynamicPaths = await fetchDynamicPaths(); // Fetch base paths
  dynamicPaths.forEach((path) => {
    languages.forEach((lang) => {
      links.push({
        url: `/${lang}${path}`, // Prepend language code to the path
        changefreq: "weekly",
        priority: 0.5,
      });
    });
  });

  // Write links to the sitemap stream
  links.forEach((link) => stream.write(link));
  stream.end();

  // Convert stream to XML and send it in the response
  streamToPromise(stream)
    .then((sm) => res.send(sm.toString()))
    .catch((error) => {
      console.error(error);
      res.status(500).end();
    });
};

// Export the named function
export default generateSitemap;

async function fetchDynamicPaths() {
  // Fetch your paths from a database or other source
  return [
    "/path-1",
    "/path-2", // Example dynamic paths
  ];
}
