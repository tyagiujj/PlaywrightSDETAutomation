import { test, expect, Locator } from "@playwright/test";

test("Verify the Sign up functionality of Automation Exercise", async ({ page }) => {

    await page.goto("https://automationexercise.com/login");

    const url: string = page.url();
    console.log("URL of the page is:", url);

    await expect(page).toHaveURL("https://automationexercise.com/login");

    const title: string = await page.title();
    console.log("Title of the page is:", title);

    await expect(page).toHaveTitle("Automation Exercise - Signup / Login");

    let newSignup: Locator = page.getByText("New User Signup!");
    await expect(newSignup).toBeVisible();

    let name: Locator = page.getByPlaceholder("Name");
    await expect(name).toBeEnabled();

    await name.fill("Ujjwal Tyagi");

    // Generate Random Email
    const randomEmail = `ujjwal${Date.now()}@gmail.com`;

    let emailAddress: Locator = page.locator('[data-qa="signup-email"]');

    await expect(emailAddress).toBeEnabled();

    await emailAddress.fill(randomEmail);

    console.log("Random Email is:", randomEmail);

    let signupButton: Locator = page.locator('[data-qa="signup-button"]');

    await expect(signupButton).toBeVisible();
    await expect(signupButton).toBeEnabled();

    await signupButton.click();

    await page.waitForTimeout(5000);

});