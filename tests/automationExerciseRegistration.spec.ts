import { test, expect, Browser, Page } from '@playwright/test';

let page: Page;

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto('https://automationexercise.com/');
});

test.afterAll(async () => {
    await page.close();
});

test('Verify Home Page URL', async () => {
    await expect(page).toHaveURL('https://automationexercise.com/');
});

test('Verify Home Page Visibility', async () => {
    await expect(page.getByText('Home')).toBeVisible();
});

test('Verify Signup/Login Navigation', async () => {
    await page.getByText('Signup / Login').click();
    await expect(page).toHaveURL('https://automationexercise.com/login');
});
test('Verify New User Signup! Heading is Visible',async()=>{
    const newSignupHeading=page.getByText('New User Signup!')
    await expect(newSignupHeading).toBeVisible();
});
test('Verify Name Field is Enabled and Fill Name',async()=>{
    const nameField= page.getByPlaceholder('Name');
    await expect(nameField).toBeEnabled();
    await nameField.fill("Ujjwal Tyagi")
});
test('Verfiy Email Field is Enabled and Fill Email' ,async()=>{
    const emailField = page.locator("//input[@data-qa='signup-email']");
await expect(emailField).toBeEnabled();
const randomEmail = `ujjwal${Date.now()}@gmail.com`;
await emailField.fill(randomEmail);
});
test('Verify Sigup Button Display ,Enable and Click ',async()=>{
    const signupButton=page.getByRole('button', { name: 'Signup' })
    await expect(signupButton).toBeVisible();
    await expect(signupButton).toBeEnabled();
    await signupButton.click();
})