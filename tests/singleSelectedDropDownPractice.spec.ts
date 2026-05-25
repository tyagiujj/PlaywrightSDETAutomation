import { test, expect, Locator } from "@playwright/test";

test("Verify the functionality of single selected dropdown", async ({ page }) => {

    await page.goto("https://practice.expandtesting.com/dropdown");

    // Select option from first dropdown
    await page.locator('#dropdown').selectOption('Option 1');

    // Select option from country dropdown by index
    await page.locator('#country').selectOption({ index: 6 });

    // Verify total options count
    const dropdownOption: Locator = page.locator('#country > option');

    await expect(dropdownOption).toHaveCount(252);

    // Get all dropdown text values
    const optionsText: string[] = (await dropdownOption.allTextContents())
        .map(text => text.trim());

    console.log(optionsText);

    // Verify Japan exists in dropdown
    expect(optionsText).toContain('Madagascar');

    // Print all dropdown options
    for (const option of optionsText) {
        console.log(option);
    }

    await page.waitForTimeout(6000);

});