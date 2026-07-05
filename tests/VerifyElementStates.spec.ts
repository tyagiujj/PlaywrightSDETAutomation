import { test, expect, Locator } from '@playwright/test';

test("Verify the states of web elements", async ({ page }) => {

    // Navigate to Application
    await page.goto("https://demoqa.com/automation-practice-form");

    // Verify Page Heading
    const pageHeading: Locator = page.getByRole('heading', { name: 'Practice Form' });
    await expect(pageHeading).toBeVisible();

    // ==========================
    // First Name
    // ==========================

    const firstName: Locator = page.locator("#firstName");

    await expect(firstName).toBeVisible();
    await expect(firstName).toBeEnabled();

    console.log("First Name Visible : ", await firstName.isVisible());
    console.log("First Name Enabled : ", await firstName.isEnabled());

    await firstName.fill("John");

    await expect(firstName).toHaveValue("John");

    console.log("First Name Value : ", await firstName.inputValue());

    // ==========================
    // Last Name
    // ==========================

    const lastName: Locator = page.locator("#lastName");

    await expect(lastName).toBeVisible();
    await expect(lastName).toBeEnabled();

    console.log("Last Name Visible : ", await lastName.isVisible());
    console.log("Last Name Enabled : ", await lastName.isEnabled());

    await lastName.fill("Tyagi");

    await expect(lastName).toHaveValue("Tyagi");

    console.log("Last Name Value : ", await lastName.inputValue());

    // ==========================
    // Email
    // ==========================

    const email: Locator = page.locator("#userEmail");

    await expect(email).toBeVisible();
    await expect(email).toBeEnabled();

    console.log("Email Visible : ", await email.isVisible());
    console.log("Email Enabled : ", await email.isEnabled());

    await email.fill("john@gmail.com");

    await expect(email).toHaveValue("john@gmail.com");

    console.log("Email Value : ", await email.inputValue());

    // ==========================
    // Male Radio Button
    // ==========================

    const maleRadioButton: Locator = page.locator("#gender-radio-1");

    await expect(maleRadioButton).toBeVisible();
    await expect(maleRadioButton).toBeEnabled();

    await maleRadioButton.check();

    await expect(maleRadioButton).toBeChecked();

    console.log("Male Radio Button Checked : ", await maleRadioButton.isChecked());

    // ==========================
    // Sports Checkbox
    // ==========================

    const sportsCheckbox: Locator = page.locator("#hobbies-checkbox-1");

    await expect(sportsCheckbox).toBeVisible();
    await expect(sportsCheckbox).toBeEnabled();

    await sportsCheckbox.check();

    await expect(sportsCheckbox).toBeChecked();

    console.log("Sports Checkbox Checked : ", await sportsCheckbox.isChecked());

    // ==========================
    // Submit Button
    // ==========================

    const submitButton: Locator = page.locator("#submit");

    await expect(submitButton).toBeVisible();
    await expect(submitButton).toBeEnabled();

    console.log("Submit Button Text : ", await submitButton.textContent());

    // ==========================
    // Page Information
    // ==========================

    console.log("Page Title : ", await page.title());

    console.log("Current URL : ", page.url());

});