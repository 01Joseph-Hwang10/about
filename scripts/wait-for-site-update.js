const puppeteer = require("puppeteer");

const url = process.env.WEBPAGE_URL;
const metaTagName = "about:version";
const timeout = 1000 * 60 * 10; // 10 minutes

let timeoutExceeded = false;

let siteUpdated = false;

const timer = setTimeout(() => {
  timeoutExceeded = true;
}, timeout);

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

(async () => {
  let iterations = 0;
  while (!timeoutExceeded) {
    iterations++;
    console.log(`Trying to get the latest version. (Iteration: ${iterations})`);
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    await page.goto(url, { waitUntil: "domcontentloaded" });

    const versionSelector = await page.waitForSelector(
      `meta[name="${metaTagName}"]`,
    );

    const version = await versionSelector?.evaluate((node) => node.content);

    console.log({
      receivedVersion: version,
      expectedVersion: process.env.VERSION,
    });

    await browser.close();
    if (version === process.env.VERSION) {
      console.log("Latest version is on live");
      siteUpdated = true;
      break;
    }
    await wait(1000);
  }
  clearTimeout(timer);
  if (!siteUpdated) {
    throw new Error("Site update timeout exceeded");
  }
})();
