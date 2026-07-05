import{test ,expect, Locator} from '@playwright/test';
test("Locators Challenge" ,async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/");

    const title :string =await page.title();
    console.log("Title of the page is : ",title);
    await expect(page).toHaveTitle("Test Login | Practice Test Automation");

    const url: string =await page.url();
    console.log("Url of the pages is : ",url);
    await expect(page).toHaveURL("https://practicetestautomation.com/practice-test-login/");

    const usernameLocator: Locator=await page.locator("#username");
    await usernameLocator.fill("student");
    console.log("Username entered successfully");

    const passwordLocator : Locator=await page.locator("[name='password']");
    await passwordLocator.fill("Password123");
    console.log("Password entered successfully");

    const submitLocator : Locator =await page.getByRole('button', { name: 'Submit' });
    await submitLocator.click();
    console.log("Submit button clicked successfully");

    const successMessageLocator : Locator =await page.getByRole('heading', { name: 'Logged In Successfully' });
    await expect(successMessageLocator).toBeVisible();
    console.log("Success message is visible on the page");

    const LogoutLocator : Locator =await page.getByText("Log out");
    await expect(LogoutLocator).toBeVisible();
    await expect(LogoutLocator).toBeEnabled();
    await LogoutLocator.click();
    console.log("Logout button clicked successfully");

})