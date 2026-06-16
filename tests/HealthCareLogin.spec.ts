import { test, expect, Page } from '@playwright/test';

let page: Page;

test.beforeAll(async ({ browser }) => {
    
    page = await browser.newPage();

    await page.goto("https://sniffleshealth.devtrust.biz/login");
});

test.afterAll(async () => {
    await page.close();
});

test("Verify the URL of the page", async () => {

    const pageUrl: string = page.url();

    console.log("Page URL:", pageUrl);

    await expect(page).toHaveURL(
        "https://sniffleshealth.devtrust.biz/login"
    );
});

test("Verify the title of the page", async () => {

    const pageTitle: string = await page.title();

    console.log("Page Title is :", pageTitle);

    await expect(page).toHaveTitle(
        "SnifflesHealth - Telemedicine Platform"
    );
});

test("Verify the login heading is visible", async () => {

    const loginHeading = page.getByText("Welcome Back");

    await expect(loginHeading).toBeVisible();
});

test("Verify the email field", async () => {

    const emailField = page.locator('input[type="email"]');

    await expect(emailField).toBeEnabled();

    await emailField.fill("test@59gmail.com");
});

test("Verify the password field", async () => {

    const passwordField = page.locator('input[name="password"]');

    await expect(passwordField).toBeEnabled();

    await passwordField.fill("Test@1234");
});

test("Verify Login Button", async () => {

    const loginButton = page.locator('button[type="submit"]');

    await expect(loginButton).toBeVisible();

    await expect(loginButton).toBeEnabled();

    await loginButton.click();

    page.waitForTimeout(5000);
});

test("Verify successful login", async () => {

    await expect(page).not.toHaveURL(
        "https://sniffleshealth.devtrust.biz/login"
    );

    console.log("Login Successful");
});