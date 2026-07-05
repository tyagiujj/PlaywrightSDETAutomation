import { test, Locator } from '@playwright/test';

test("Count Multiple Web Elements", async ({ page }) => {

    // Navigate to Application
    await page.goto("https://demoqa.com/automation-practice-form");

    console.log("========================================");
    console.log(" Playwright Multiple Elements Challenge ");
    console.log("========================================");

    // ========================================
    // Count Links
    // ========================================

    const links: Locator = page.locator("a");
    const totalLinks: number = await links.count();

    console.log("\nTotal Number of Links : " + totalLinks);

    for (let i = 0; i < totalLinks; i++) {

        const link = links.nth(i);

        const linkText = (await link.textContent())?.trim() || "No Text";

        const linkURL = await link.getAttribute("href") || "No URL";

        console.log("----------------------------------------");
        console.log("Link " + (i + 1));
        console.log("Text : " + linkText);
        console.log("URL  : " + linkURL);
    }

    // ========================================
    // Count Images
    // ========================================

    const images: Locator = page.locator("img");

    console.log("\nTotal Number of Images : " + await images.count());

    // ========================================
    // Count Input Fields
    // ========================================

    const inputFields: Locator = page.locator("input");

    console.log("Total Number of Input Fields : " + await inputFields.count());

    // ========================================
    // Count Buttons
    // ========================================

    const buttons: Locator = page.locator("button");

    console.log("Total Number of Buttons : " + await buttons.count());

    // ========================================
    // Count Text Areas
    // ========================================

    const textAreas: Locator = page.locator("textarea");

    console.log("Total Number of Text Areas : " + await textAreas.count());

    console.log("\n========================================");
    console.log(" Program Executed Successfully ");
    console.log("========================================");

});