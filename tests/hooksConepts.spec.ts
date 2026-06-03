import { test, expect, chromium, Browser, Page } from '@playwright/test';

let browser: Browser;
let page: Page;

test.beforeAll(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
    await page.goto('https://www.saucedemo.com/');
});

test('Verify URL', async () => {
    await expect(page).toHaveURL('https://www.saucedemo.com/');
});

test('Verify Title', async () => {
    await expect(page).toHaveTitle('Swag Labs');
});

test.afterAll(async () => {
    await browser.close();
});