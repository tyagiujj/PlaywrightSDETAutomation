import { test, expect } from '@playwright/test';

test('User Signup, Account Creation and Deletion Flow', async ({ page }) => {

    await page.goto('https://automationexercise.com/');

    // Home Page
    await expect(page).toHaveURL('https://automationexercise.com/');
    await expect(page.getByText('Home')).toBeVisible();

    // Signup/Login
    await page.getByText('Signup / Login').click();
    await expect(page).toHaveURL(/login/);

    // Signup
    await expect(page.getByText('New User Signup!')).toBeVisible();

    await page.getByPlaceholder('Name').fill('Ujjwal Tyagi');

    const email = `ujjwal${Date.now()}@gmail.com`;
    await page.locator("//input[@data-qa='signup-email']").fill(email);

    await page.getByRole('button', { name: 'Signup' }).click();

    // Account Info
    await expect(page.getByText('Enter Account Information')).toBeVisible();

    await page.locator('#id_gender1').click();
    await page.locator('#password').fill('Test@1234');

    await page.locator('#days').selectOption({ index: 3 });
    await page.locator('#months').selectOption({ value: '7' });
    await page.locator('#years').selectOption({ index: 3 });

    await page.locator('#newsletter').check();
    await page.locator('#optin').check();

    // Address
    await page.fill('#first_name', 'Ujjwal');
    await page.fill('#last_name', 'Tyagi');
    await page.fill('#company', 'Dev Tech');
    await page.fill('#address1', 'Noida Sec 63');
    await page.fill('#address2', 'Muzaffarnagar');
    await page.selectOption('#country', 'New Zealand');
    await page.fill('#state', 'UP');
    await page.fill('#city', 'Noida');
    await page.fill('#zipcode', '201309');
    await page.fill('#mobile_number', '9756360213');

    // Create Account
    await page.getByText('Create Account').click();

    await expect(page.getByText('Account Created!')).toBeVisible();

    // Continue
    await page.getByText('Continue').click();

    // Logged in verification
    await expect(page.getByText('Logged in as')).toBeVisible();

    // Delete Account
    await page.getByText('Delete Account').click();

    await expect(page.getByText('Account Deleted!')).toBeVisible();

    await page.getByText('Continue').click();
});