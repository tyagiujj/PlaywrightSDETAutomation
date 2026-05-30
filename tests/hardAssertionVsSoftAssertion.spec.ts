import { test, expect, Locator } from "@playwright/test";

test("Concepts of Hard Assertion and Soft Assertion", async ({ page }) => {

    // Hard Assertions
    await page.goto("https://myschoolone.com/hisp");

    await expect(page).toHaveURL("https://myschoolone.com/hisp");
    await expect(page).toHaveTitle("MySchoolOne");

    const signInButton: Locator = page.getByText("Sign In");
    await expect(signInButton).toBeVisible();

    console.log("Hard Assertions Passed");

    // Soft Assertions
    await page.goto("https://testautomationpractice.blogspot.com/");

    await expect.soft(page).toHaveURL("https://testautomationpractice.blogspot.com/"); // Intentionally wrong
    await expect.soft(page).toHaveTitle("Automation Testing Practice");

    console.log("Execution continues even after soft assertion failure");

});