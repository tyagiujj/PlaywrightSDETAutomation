import { test, expect } from '@playwright/test';

test('Simple Alert', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    page.once('dialog', async dialog => {

        expect(dialog.message()).toEqual('I am an alert box!');

        await dialog.accept();
    });

    await page.locator('#alertBtn').click();


    //confirm alert
    page.once('dialog',async dialog=>{
        expect(dialog.message()).toEqual('Press a button!');
        await dialog.accept();
    })
    await page.locator('#confirmBtn').click();


    //prompt alert
    page.once('dialog',async dialog=>{
        expect(dialog.message()).toEqual('Please enter your name:');
        await dialog.accept('Playwright');

    })
    await page.locator('#promptBtn').click();
});