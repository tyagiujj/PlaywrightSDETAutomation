import{test,expect} from '@playwright/test';

test("Verify the functionality of navigation commands",async({page})=>{
    await page.goto("https://www.google.com");

    await page.goto("https://www.amazon.in");
    await page.goto("https://www.flipkart.com");

    await page.goBack();
    console.log("Url after going back is : ",await page.url());

    await page.goBack();
    console.log("Url after going back is :",await page.url());

    await page.goForward();
    await page.goForward();
    console.log("Url after going forward is : ",await page.url());

    await page.reload();
    console.log("Final url after reloading the page is : ",await page.url());

})