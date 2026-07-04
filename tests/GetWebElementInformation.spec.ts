import{test, Locator,expect} from '@playwright/test';
test("Get the information of web element" ,async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/");

    const usernameLocator: Locator=await page.locator("#username");
    console.log("Placeholder of username field is : ",await usernameLocator.getAttribute("placeholder"));
    console.log("Type of username field is : ",await usernameLocator.getAttribute("type"));
    console.log("Class of username field is : ",await usernameLocator.getAttribute("class"));
    console.log("ID of username field is : ",await usernameLocator.getAttribute("id"));
    console.log("Name of username field is : ",await usernameLocator.getAttribute("name"));
    console.log("Value of username field is : ",await usernameLocator.getAttribute("value"));


    const passwordLocator :Locator=await page.locator("#password");
    console.log("Placeholder of password field is : ",await passwordLocator.getAttribute("placeholder"));
    console.log("Type of password field is : ",await passwordLocator.getAttribute("type"));
    console.log("Class of password field is : ",await passwordLocator.getAttribute("class"));
    console.log("ID of password field is : ",await passwordLocator.getAttribute("id"));
    console.log("Name of password field is : ",await passwordLocator.getAttribute("name"));
    console.log("Value of password field is : ",await passwordLocator.getAttribute("value"));

    const submitLocator : Locator=await page.locator("#submit");
    console.log("Button text of submit button is : " ,await submitLocator.textContent());
    console.log("Tag name of submit button is : " ,await submitLocator.evaluate((ele)=>ele.tagName));
    console.log("Class Attribute of submit button is : ",await submitLocator.getAttribute("class"));
    await expect(submitLocator).toBeVisible();
    await expect(submitLocator).toBeEnabled();

    console.log("Title of the page is : " ,await page.title());
    console.log("Url of the page is : ", await page.url());



    
})