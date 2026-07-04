import{test ,expect ,Locator} from '@playwright/test';

test("Verify the functionality of login automation" ,async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/");

    const title : string =await page.title();
    console.log("Title of the page is : ",title);
    await expect(page).toHaveTitle("Test Login | Practice Test Automation");

    await page.locator("#username").fill("student");
    await page.locator("#password").fill("Password123");
    await page.locator("#submit").click();

    await expect(page).toHaveURL("https://practicetestautomation.com/logged-in-successfully/");
    await expect(page.getByText("Logged In Successfully")).toBeVisible();
    await expect(page.getByText("Log out")).toBeVisible();
    await page.getByText("Log out").click();
    await expect(page).toHaveURL("https://practicetestautomation.com/practice-test-login/");


})