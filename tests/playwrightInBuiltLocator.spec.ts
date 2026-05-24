import { test, expect, Locator } from "@playwright/test";

test("Practice of Playwright inbuilt Locator", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    // Wait for 5 seconds
    await page.waitForTimeout(5000);

    // Verify heading text
    const text: Locator = page.getByText("Automation Testing Practice");
    await expect(text).toBeVisible();

    // Name textbox using placeholder
    const name: Locator = page.getByPlaceholder("Enter Name");

    await expect(name).toBeVisible();
    await expect(name).toBeEnabled();

    await name.fill("Ujjwal Tyagi");

    // Click on Home link
    const homeLink = page.getByRole("link", { name: "Home" }).first();

    await expect(homeLink).toBeVisible();

    await homeLink.click();

    // Get Title
    const title: string = await page.title();
    console.log("Title of the Page is: ", title);

    await expect(page).toHaveTitle("Automation Testing Practice");

    // Get URL
    const url: string = page.url();
    console.log("URL of the Page is: ", url);

    await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/");

    // Wait for 5 seconds after click
    await page.waitForTimeout(5000);

});