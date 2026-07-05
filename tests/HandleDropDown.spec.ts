import { test, expect, Locator } from '@playwright/test';

test("Handle Dropdown using selectOption()", async ({ page }) => {

    // Launch Application
    await page.goto("https://demoqa.com/select-menu");

    // ===========================
    // Verify Page Information
    // ===========================

    console.log("===========================================");
    console.log(" Playwright Dropdown Challenge ");
    console.log("===========================================");

    console.log("Page Title : ", await page.title());
    console.log("Current URL : ", page.url());

    // ===========================
    // Locate Dropdown
    // ===========================

    const oldSelectMenu: Locator = page.locator("#oldSelectMenu");

    await expect(oldSelectMenu).toBeVisible();
    await expect(oldSelectMenu).toBeEnabled();

    // ===========================
    // Select By Visible Text (Label)
    // ===========================

    await oldSelectMenu.selectOption({ label: "Green" });

    console.log("\nSelected using Label : Green");

    await expect(oldSelectMenu).toHaveValue("2");

    // ===========================
    // Select By Value
    // ===========================

    await oldSelectMenu.selectOption({ value: "5" });

    console.log("Selected using Value : Purple");

    await expect(oldSelectMenu).toHaveValue("5");

    // ===========================
    // Select By Index
    // ===========================

    await oldSelectMenu.selectOption({ index: 3 });

    console.log("Selected using Index : Yellow");

    await expect(oldSelectMenu).toHaveValue("3");

    // ===========================
    // Print Selected Option
    // ===========================

    const selectedOption = await oldSelectMenu.locator("option:checked").textContent();

    console.log("\nCurrently Selected Option : ", selectedOption);

    // ===========================
    // Print Total Options
    // ===========================

    const options = oldSelectMenu.locator("option");

    const totalOptions = await options.count();

    console.log("\nTotal Options : ", totalOptions);

    // ===========================
    // Print All Options
    // ===========================

    console.log("\n========== Original Order ==========");

    const optionTexts = await options.allTextContents();

    optionTexts.forEach(option => {
        console.log(option);
    });

    // ===========================
    // Ascending Order
    // ===========================

    console.log("\n========== Ascending Order ==========");

    const ascending = [...optionTexts].sort();

    ascending.forEach(option => {
        console.log(option);
    });

    // ===========================
    // Descending Order
    // ===========================

    console.log("\n========== Descending Order ==========");

    const descending = [...optionTexts].sort().reverse();

    descending.forEach(option => {
        console.log(option);
    });

    // ===========================
    // Verify Purple Exists
    // ===========================

    expect(optionTexts).toContain("Purple");

    console.log("\nVerified : Purple option exists in dropdown.");

    console.log("\n===========================================");
    console.log(" Dropdown Automation Completed Successfully");
    console.log("===========================================");

});