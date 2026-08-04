import{test , expect ,Locator} from '@playwright/test';

test("Verify the login functionality of OrangeHRMS", async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    const URL= await  page.url();
    await expect(URL).toBe("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    const Title = await page.title();
    await expect(Title).toBe("OrangeHRM");

    const username: Locator = page.getByRole('textbox', { name: 'Username' });
    await expect(username).toBeEnabled();
    await username.fill("Admin");

    const password: Locator = page.getByRole('textbox', { name: 'Password' });
    await expect(password).toBeEnabled();
    await password.fill("admin123");

    const loginButton: Locator = page.getByRole('button', { name: 'login' });
    await expect(loginButton).toBeVisible();
    await loginButton.click();
});