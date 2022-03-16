import scrape from "website-scraper";

let options = {
  urls: ["https://nodejs.dev"],
  directory: "../downloadSourceCode",
};

scrape(options)
  .then((res) => {
    console.log("Website source code downloaded successfully");
  })
  .catch((err) => console.log(err));
