import { chromium } from "playwright";

const BASE_URL = "http://localhost:3000/tr";

const viewports = [
  { name: "after-bento-desktop-1440x1000", width: 1440, height: 1000 },
  { name: "after-bento-tablet-768x1000", width: 768, height: 1000 },
  { name: "after-bento-mobile-390x1000", width: 390, height: 1000 },
];

async function main() {
  const browser = await chromium.launch();
  
  for (const vp of viewports) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
    });
    const page = await context.newPage();
    await page.goto(BASE_URL, { waitUntil: "networkidle" });
    
    // Find the bento grid container itself (the outer grid div)
    // We'll scroll to the grid area by looking for the section that contains "Deneyimler"
    const gridSection = page.locator("section").filter({ hasText: "Gün boyu farklı atmosferler" }).first();
    if (await gridSection.isVisible()) {
      // Scroll the bento grid section into the middle of the viewport
      const box = await gridSection.boundingBox();
      if (box) {
        // We want the section top to be about 10px from the top of viewport
        await page.evaluate((y) => window.scrollTo(0, y - 10), box.y);
      }
    }
    
    // Wait for images to load
    await page.waitForTimeout(2000);
    
    const path = `d:/Projects/hotel-reservation/apps/web/.visual-qa/${vp.name}.png`;
    await page.screenshot({ path, fullPage: false });
    console.log(`Saved: ${path}`);
    
    await context.close();
  }
  
  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
