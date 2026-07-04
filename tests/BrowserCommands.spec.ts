import {test ,Locator ,expect} from '@playwright/test';

test("Verify the functionality of browser commands",async({page})=>{
    await page.goto("https://www.google.com");
    const title : string =await page.title();
    console.log("Title of the page is : "+title);
    await expect(page).toHaveTitle("Google");

    const url :string =await page.url();
    console.log("URL of the page is : ",url);
    await expect(page).toHaveURL("https://www.google.com/");

    const pageSource : string =await page.content();
    console.log("Page source is : ",pageSource);

    await page.close();
})
