import{test,expect}from '@playwright/test'

test("Verify the navigation command",async({page})=>{
    await page.goto("https://myschoolone.com/hisp");
    console.log("Title of the page is : ",await page.title());
    console.log("Page Successfully loaded");

await page.reload();
console.log("Page Reloaded Successfully");

await page.goto("https://www.facebook.com/");
console.log("Title of the Facebook page is : ",await page.title());
console.log("Facebook page Successfully loaded");

await page.goBack();
console.log("Title of the page is After going back :",await page.title());
console.log("Page Successfully loaded After going back");

await page.goForward();
console.log("Title of the page is After going forward :",await page.title());
console.log("Page Successfully loaded After going forward");

await page.close();


    
})