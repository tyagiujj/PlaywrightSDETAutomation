// ============================================================================
// TEST GROUPING IN PLAYWRIGHT - BEGINNER LEVEL TUTORIAL
// ============================================================================
// Test grouping helps you organize related tests together, making your code:
// - More readable and maintainable
// - Easier to run specific test groups
// - Better organized with setup/teardown logic
// ============================================================================

import { test, expect } from '@playwright/test';

// ============================================================================
// CONCEPT 1: BASIC TEST GROUP USING test.describe()
// ============================================================================
// test.describe() creates a group of related tests
// Syntax: test.describe('Group Name', () => { ... })
// This helps organize tests by feature or functionality

test.describe('Login Functionality - Group 1', () => {
  // All tests inside this group are related to login functionality
  
  test('Test 1: User should be able to navigate to login page', async ({ page }) => {
    // Navigate to a test website
    await page.goto('https://practice.automationexercise.com/');
    
    // Click on login button
    await page.click('//a[@href="/login"]');
    
    // Verify login page title
    const pageTitle = await page.title();
    expect(pageTitle).toContain('Automation');
    
    console.log('✓ Test passed: Navigation to login page successful');
  });

  test('Test 2: User should see email input field on login page', async ({ page }) => {
    // Navigate to login page
    await page.goto('https://practice.automationexercise.com/login');
    
    // Check if email input field exists
    const emailField = await page.locator('input[data-qa="login-email"]');
    await expect(emailField).toBeVisible();
    
    console.log('✓ Test passed: Email field is visible');
  });

  test('Test 3: User should see password input field on login page', async ({ page }) => {
    // Navigate to login page
    await page.goto('https://practice.automationexercise.com/login');
    
    // Check if password input field exists
    const passwordField = await page.locator('input[data-qa="login-password"]');
    await expect(passwordField).toBeVisible();
    
    console.log('✓ Test passed: Password field is visible');
  });
});

// ============================================================================
// CONCEPT 2: NESTED TEST GROUPS (Sub-groups)
// ============================================================================
// You can create sub-groups inside main groups
// This creates a hierarchy: Main Group > Sub Group > Tests
// Useful for organizing complex features

test.describe('Signup Functionality - Group 2', () => {
  // Main group for all signup tests
  
  test.describe('Signup Form Fields', () => {
    // Sub-group for signup form field tests
    
    test('Test 4: Signup page should display "Name" field', async ({ page }) => {
      await page.goto('https://practice.automationexercise.com/');
      await page.click('//a[@href="/login"]'); // It's signup/login combined page
      
      const nameField = await page.locator('input[data-qa="signup-name"]');
      await expect(nameField).toBeVisible();
      
      console.log('✓ Test passed: Name field visible on signup form');
    });

    test('Test 5: Signup page should display "Email" field', async ({ page }) => {
      await page.goto('https://practice.automationexercise.com/');
      await page.click('//a[@href="/login"]');
      
      const emailField = await page.locator('input[data-qa="signup-email"]');
      await expect(emailField).toBeVisible();
      
      console.log('✓ Test passed: Email field visible on signup form');
    });
  });

  test.describe('Signup Form Submission', () => {
    // Another sub-group for form submission tests
    
    test('Test 6: Signup form should have submit button', async ({ page }) => {
      await page.goto('https://practice.automationexercise.com/');
      await page.click('//a[@href="/login"]');
      
      const submitButton = await page.locator('button:has-text("Signup")');
      await expect(submitButton).toBeVisible();
      
      console.log('✓ Test passed: Submit button is visible');
    });
  });
});

// ============================================================================
// CONCEPT 3: SETUP AND TEARDOWN USING beforeEach() and afterEach()
// ============================================================================
// beforeEach() = runs BEFORE each test in the group (setup)
// afterEach() = runs AFTER each test in the group (cleanup)
// This avoids repeating code in every test

test.describe('Cart Functionality - Group 3', () => {
  // SETUP: Code that runs BEFORE each test
  test.beforeEach(async ({ page }) => {
    console.log('>> Setting up: Navigating to products page');
    await page.goto('https://practice.automationexercise.com/products');
    
    // Wait for page to load
    await page.waitForLoadState('networkidle');
  });

  // TEARDOWN: Code that runs AFTER each test
  test.afterEach(async ({ page }) => {
    console.log('<< Tearing down: Taking a screenshot of final state');
    await page.screenshot({ path: `screenshot-${Date.now()}.png` });
  });

  test('Test 7: User should be able to view products', async ({ page }) => {
    // beforeEach already navigated to products page, so we just verify
    const products = await page.locator('.product-list');
    await expect(products).toBeVisible();
    
    console.log('✓ Test passed: Products are visible');
  });

  test('Test 8: User should be able to see add to cart button', async ({ page }) => {
    // beforeEach already navigated to products page
    const addToCartButton = await page.locator('.add-to-cart').first();
    await expect(addToCartButton).toBeVisible();
    
    console.log('✓ Test passed: Add to cart button visible');
  });

  test('Test 9: Cart page should be accessible', async ({ page }) => {
    // beforeEach already navigated to products page
    await page.click('//a[@href="/view_cart"]');
    
    const cartTable = await page.locator('#cart_info_table');
    await expect(cartTable).toBeVisible();
    
    console.log('✓ Test passed: Cart page is accessible');
  });
});

// ============================================================================
// CONCEPT 4: SKIPPING TESTS USING test.skip()
// ============================================================================
// test.skip() = temporarily disable/skip a test
// Useful when:
//   - A feature is not ready yet
//   - A test is broken and you'll fix it later
//   - You want to run only specific tests
// The skipped test will NOT run when you execute tests

test.describe('Product Details - Group 4', () => {
  test('Test 10: Should display product name', async ({ page }) => {
    await page.goto('https://practice.automationexercise.com/products');
    
    const productName = await page.locator('h2').first();
    await expect(productName).toBeVisible();
    
    console.log('✓ Test passed: Product name displayed');
  });

  test.skip('Test 11: Should display product description (SKIPPED - Feature not implemented)', 
    async ({ page }) => {
      // This test will NOT run
      await page.goto('https://practice.automationexercise.com/products');
      
      const description = await page.locator('.product-description');
      await expect(description).toBeVisible();
      
      console.log('✓ Test passed: Product description displayed');
    });

  test('Test 12: Should display product price', async ({ page }) => {
    await page.goto('https://practice.automationexercise.com/products');
    
    const price = await page.locator('.product-price').first();
    await expect(price).toBeVisible();
    
    console.log('✓ Test passed: Product price displayed');
  });
});

// ============================================================================
// CONCEPT 5: RUNNING ONLY SPECIFIC TESTS USING test.only()
// ============================================================================
// test.only() = run ONLY this test (ignores all other tests)
// Useful for debugging a single test
// WARNING: Remember to remove test.only() when you're done!
// You can also use test.only() on describe() to run only that group

test.describe.only('Search Functionality - Group 5 (ONLY THIS GROUP WILL RUN)', () => {
  // This entire group will run, other groups will be skipped
  
  test('Test 13: Search box should be visible', async ({ page }) => {
    await page.goto('https://practice.automationexercise.com/products');
    
    const searchBox = await page.locator('input[id="search_product"]');
    await expect(searchBox).toBeVisible();
    
    console.log('✓ Test passed: Search box is visible');
  });

  test('Test 14: User should be able to type in search box', async ({ page }) => {
    await page.goto('https://practice.automationexercise.com/products');
    
    const searchBox = await page.locator('input[id="search_product"]');
    await searchBox.fill('Blue Top');
    
    const searchValue = await searchBox.inputValue();
    expect(searchValue).toBe('Blue Top');
    
    console.log('✓ Test passed: Can type in search box');
  });

  // This test uses test.only() to run ONLY this specific test in this group
  test.only('Test 15: Search should return results', async ({ page }) => {
    await page.goto('https://practice.automationexercise.com/products');
    
    const searchBox = await page.locator('input[id="search_product"]');
    await searchBox.fill('Blue Top');
    
    const searchButton = await page.locator('button#submit_search');
    await searchButton.click();
    
    // Wait for results to load
    await page.waitForLoadState('networkidle');
    
    const results = await page.locator('.product-image-container');
    await expect(results).toHaveCount(1);
    
    console.log('✓ Test passed: Search returned results');
  });
  // NOTE: Only Test 15 will run because it has test.only()
  // Other tests in this group and other groups will be skipped
});

// ============================================================================
// CONCEPT 6: COMMON SETUP AND TEARDOWN FOR ALL TESTS
// ============================================================================
// You can use beforeAll() and afterAll() for setup that runs:
// - beforeAll() = ONCE before ALL tests in the entire file
// - afterAll() = ONCE after ALL tests in the entire file
// Useful for expensive operations like database setup

test.beforeAll(async ({ }) => {
  console.log('════════════════════════════════════════════════════════════');
  console.log('🚀 STARTING ALL TESTS - beforeAll() executed ONCE');
  console.log('════════════════════════════════════════════════════════════');
});

test.afterAll(async ({ }) => {
  console.log('════════════════════════════════════════════════════════════');
  console.log('✅ ALL TESTS COMPLETED - afterAll() executed ONCE');
  console.log('════════════════════════════════════════════════════════════');
});

// ============================================================================
// SUMMARY OF KEY CONCEPTS FOR TEST GROUPING
// ============================================================================
/*
1. test.describe('Group Name', () => {})
   - Groups related tests together
   - Improves code organization and readability
   
2. Nested test.describe() 
   - Create sub-groups within main groups
   - Better organization for complex features
   - Example: describe('Feature') > describe('Sub-feature') > test()
   
3. test.beforeEach(() => {})
   - Runs BEFORE each test
   - Use for: opening page, logging in, navigating to page
   
4. test.afterEach(() => {})
   - Runs AFTER each test
   - Use for: cleanup, screenshots, closing browser tabs
   
5. test.skip('Test name', () => {})
   - Skips this test (won't run)
   - Use for: incomplete features, broken tests
   
6. test.only('Test name', () => {})
   - Runs ONLY this test
   - Use for: debugging a single test
   - WARNING: Remove before committing code!
   
7. test.beforeAll(() => {})
   - Runs ONCE before all tests in file
   - Use for: expensive setup operations
   
8. test.afterAll(() => {})
   - Runs ONCE after all tests in file
   - Use for: final cleanup operations

BEST PRACTICES:
✓ Use describe() to group tests by feature/functionality
✓ Use beforeEach/afterEach to reduce code duplication
✓ Use meaningful group and test names
✓ Keep tests independent (no tests should depend on other tests)
✓ Remove test.only() before committing code
✓ Use test.skip() with comments explaining why test is skipped
*/
