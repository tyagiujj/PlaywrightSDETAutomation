import{test,expect} from "@playwright/test";

/*
test("title",()=>{
    //Step 1
    //Step 2
    //Step 3

})*/


//Fixture --global variable  :page ,browser
test("Verify page title",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");
let Title : string= await page.title();
console.log("Title of the page is :",Title);
 await expect(page).toHaveTitle("Automation Testing Practice");

})