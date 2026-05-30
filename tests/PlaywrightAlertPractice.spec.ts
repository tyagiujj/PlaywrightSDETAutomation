import { test, expect } from "@playwright/test";

test("Handle all alerts one by one", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    // Simple Alert
    page.once("dialog", async dialog => {
        console.log("Simple Alert : " + dialog.message());
        await dialog.accept();
    });

    await page.locator("#alertBtn").click();

    // Confirmation Alert
    page.once("dialog", async dialog => {
        console.log("Confirmation Alert : " + dialog.message());
        await dialog.accept(); // or dismiss()
    });

    await page.locator("#confirmBtn").click();

    // Prompt Alert
    page.once("dialog", async dialog => {
        console.log("Prompt Alert : " + dialog.message());
        await dialog.accept("Ujjwal Tyagi");
    });

    await page.locator("#promptBtn").click();

});