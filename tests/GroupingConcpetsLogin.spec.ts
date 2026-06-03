import { test, expect ,Locator } from '@playwright/test';

test.describe('Login Functionality, as a user I want to login to the application', () => {

    test('Valid Login', async ({ page }) => {
       console.log("this is a valid login test cases......");
       await page.goto("https://www.saucedemo.com/");
    const username :Locator=page.locator("#user-name");
    expect(username).toBeVisible();
    await username.fill("standard_user");
    const password: Locator=page.locator("#password");
    expect(password).toBeVisible();
    await password.fill("secret_sauce");
    const loginButton: Locator=page.locator("#login-button");
    expect(loginButton).toBeVisible();
    await loginButton.click();
  });
  
});

test.describe('Login Functionality - Negative Scenarios', () => {

    test('With a valid username and invalid password', async ({ page }) => {
        console.log("this is a valid username and invalid password test cases......");
        await page.goto("https://www.saucedemo.com.");
        const username:Locator=page.locator("#user-name");
        expect(username).toBeVisible()
        await username.fill("standard_user");
        const password:Locator=page.locator("#password");
        expect(password).toBeVisible();
        await password.fill("invalid_password");
        const loginButton:Locator=page.locator("#login-button");
        expect(loginButton).toBeVisible()
        await loginButton.click();
        const errrorMessage:Locator=page.locator("h3[data-test='error']");
        expect(errrorMessage).toBeVisible();
    });

});