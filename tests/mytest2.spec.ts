import{test,expect} from "@playwright/test";

/*
test("title",()=>{
    //Step 1
    //Step 2
    //Step 3

})*/


//Fixture --global variable  :page ,browser
test("Verify page URL",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");
let URL : string= await page.url();
console.log("Title of the page is :",URL);
 await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/");

})