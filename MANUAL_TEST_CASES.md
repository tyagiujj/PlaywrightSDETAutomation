# Manual Test Cases - Automation Exercise Signup

## Test Case 1: Verify Login/Signup Page Load
**Test Case ID:** TC-AE-001  
**Test Name:** Verify the Signup/Login page loads correctly  
**Priority:** High  
**Test Type:** Functional

### Pre-conditions:
- Internet connection is active
- Browser is installed and functional
- User has access to https://automationexercise.com

### Test Steps:
1. Open a web browser (Chrome, Firefox, Safari, or Edge)
2. Navigate to URL: `https://automationexercise.com/login`
3. Wait for the page to fully load

### Expected Results:
- Page URL should be exactly: `https://automationexercise.com/login`
- Page title should be: `Automation Exercise - Signup / Login`
- Page should load without any errors

### Test Data:
- URL: https://automationexercise.com/login

---

## Test Case 2: Verify "New User Signup!" Section is Visible
**Test Case ID:** TC-AE-002  
**Test Name:** Verify "New User Signup!" heading is displayed on the page  
**Priority:** High  
**Test Type:** Functional

### Pre-conditions:
- User has successfully navigated to https://automationexercise.com/login
- Page has fully loaded

### Test Steps:
1. On the login page, look for the signup section on the right side
2. Verify the heading "New User Signup!" is visible

### Expected Results:
- "New User Signup!" heading should be clearly visible on the page
- The signup form section should be displayed

### Test Data:
- Expected Heading Text: "New User Signup!"

---

## Test Case 3: Verify Name Field is Enabled and Accepts Input
**Test Case ID:** TC-AE-003  
**Test Name:** Verify Name field is functional and accepts user input  
**Priority:** High  
**Test Type:** Functional

### Pre-conditions:
- User has successfully navigated to https://automationexercise.com/login
- Page has fully loaded
- "New User Signup!" section is visible

### Test Steps:
1. Locate the "Name" input field in the signup form
2. Click on the Name field to focus it
3. Type the name: `Ujjwal Tyagi`
4. Verify the text appears in the field

### Expected Results:
- Name field should be enabled (not disabled)
- Text "Ujjwal Tyagi" should appear in the Name field
- Field should accept the input without any validation errors

### Test Data:
- Name: Ujjwal Tyagi

---

## Test Case 4: Verify Email Field is Enabled and Accepts Input
**Test Case ID:** TC-AE-004  
**Test Name:** Verify Email field is functional and accepts user input  
**Priority:** High  
**Test Type:** Functional

### Pre-conditions:
- User has successfully navigated to https://automationexercise.com/login
- Page has fully loaded
- "New User Signup!" section is visible
- Name field has been filled with data

### Test Steps:
1. Locate the "Email address" input field in the signup form
2. Click on the Email field to focus it
3. Type a unique email address: `ujjwal<timestamp>@gmail.com` (Replace <timestamp> with current timestamp)
   - Example: `ujjwal1717409200000@gmail.com`
4. Verify the email appears in the field

### Expected Results:
- Email field should be enabled (not disabled)
- Email text should appear in the Email field
- Field should accept the input without any validation errors
- Email should be in valid format (username@domain.com)

### Test Data:
- Email Format: `ujjwal<timestamp>@gmail.com`
- Example Email: `ujjwal1717409200000@gmail.com`

---

## Test Case 5: Verify Signup Button is Visible and Enabled
**Test Case ID:** TC-AE-005  
**Test Name:** Verify Signup button is visible and in enabled state  
**Priority:** High  
**Test Type:** Functional

### Pre-conditions:
- User has successfully navigated to https://automationexercise.com/login
- Page has fully loaded
- Name field has been filled with "Ujjwal Tyagi"
- Email field has been filled with a valid email address

### Test Steps:
1. Look for the "Signup" button in the "New User Signup!" section
2. Verify the button is visible on the page
3. Verify the button is in enabled state (not grayed out)

### Expected Results:
- Signup button should be visible on the page
- Signup button should be in enabled state
- Button should be clickable

### Test Data:
- Button Label: "Signup"

---

## Test Case 6: Complete Signup Flow - Happy Path
**Test Case ID:** TC-AE-006  
**Test Name:** Verify complete signup flow with valid credentials  
**Priority:** Critical  
**Test Type:** Functional/End-to-End

### Pre-conditions:
- User has access to https://automationexercise.com
- User has internet connectivity
- Browser is available

### Test Steps:
1. Open browser and navigate to `https://automationexercise.com/login`
2. Wait for the page to fully load (approximately 3-5 seconds)
3. Verify page URL is `https://automationexercise.com/login`
4. Verify page title is `Automation Exercise - Signup / Login`
5. Verify "New User Signup!" heading is visible
6. Locate and fill the Name field with: `Ujjwal Tyagi`
7. Verify Name field is enabled and accepts input
8. Locate and fill the Email field with a unique email: `ujjwal<timestamp>@gmail.com`
9. Verify Email field is enabled and accepts input
10. Verify Signup button is visible and enabled
11. Click the Signup button
12. Wait for 5 seconds for the page to load/process

### Expected Results:
- Page loads successfully with correct URL and title
- "New User Signup!" section is displayed
- Name field accepts "Ujjwal Tyagi" without errors
- Email field accepts unique email without errors
- Signup button is clickable and changes state when clicked
- After clicking Signup, the page processes the request
- No error messages should appear during the process
- Browser should navigate to the next step (account information form or confirmation page)

### Test Data:
- URL: https://automationexercise.com/login
- Expected Title: Automation Exercise - Signup / Login
- Name: Ujjwal Tyagi
- Email: ujjwal<timestamp>@gmail.com (Generate with current timestamp)
- Example Email: ujjwal1717409200000@gmail.com

---

## Test Case 7: Verify Error Handling - Empty Name Field
**Test Case ID:** TC-AE-007  
**Test Name:** Verify error handling when Name field is left empty  
**Priority:** Medium  
**Test Type:** Negative Test

### Pre-conditions:
- User has successfully navigated to https://automationexercise.com/login
- Page has fully loaded
- "New User Signup!" section is visible

### Test Steps:
1. Leave the Name field empty
2. Fill the Email field with a valid email: `ujjwal<timestamp>@gmail.com`
3. Click the Signup button

### Expected Results:
- Error message should be displayed indicating Name field is required
- OR Signup button should be disabled when Name is empty
- Page should not proceed to the next step

### Test Data:
- Name: (Empty)
- Email: ujjwal<timestamp>@gmail.com

---

## Test Case 8: Verify Error Handling - Empty Email Field
**Test Case ID:** TC-AE-008  
**Test Name:** Verify error handling when Email field is left empty  
**Priority:** Medium  
**Test Type:** Negative Test

### Pre-conditions:
- User has successfully navigated to https://automationexercise.com/login
- Page has fully loaded
- "New User Signup!" section is visible

### Test Steps:
1. Fill the Name field with: `Ujjwal Tyagi`
2. Leave the Email field empty
3. Click the Signup button

### Expected Results:
- Error message should be displayed indicating Email field is required
- OR Signup button should be disabled when Email is empty
- Page should not proceed to the next step

### Test Data:
- Name: Ujjwal Tyagi
- Email: (Empty)

---

## Test Case 9: Verify Error Handling - Invalid Email Format
**Test Case ID:** TC-AE-009  
**Test Name:** Verify error handling when invalid email format is provided  
**Priority:** Medium  
**Test Type:** Negative Test

### Pre-conditions:
- User has successfully navigated to https://automationexercise.com/login
- Page has fully loaded
- "New User Signup!" section is visible

### Test Steps:
1. Fill the Name field with: `Ujjwal Tyagi`
2. Fill the Email field with invalid email format: `ujjwaltest` (without @ and domain)
3. Click the Signup button

### Expected Results:
- Error message should be displayed for invalid email format
- Page should not proceed to the next step
- User should be prompted to enter valid email

### Test Data:
- Name: Ujjwal Tyagi
- Email: ujjwaltest (invalid format)

---

## Test Case 10: Verify Page Response Time
**Test Case ID:** TC-AE-010  
**Test Name:** Verify page loads within acceptable time frame  
**Priority:** Medium  
**Test Type:** Performance

### Pre-conditions:
- User has internet connectivity
- Browser is available
- Network connection is stable

### Test Steps:
1. Note the current time
2. Open browser and navigate to `https://automationexercise.com/login`
3. Note the time when the page is fully loaded
4. Calculate the total load time

### Expected Results:
- Page should load within 3-5 seconds
- All elements should be visible and interactive
- No timeout errors should occur

### Test Data:
- URL: https://automationexercise.com/login
- Acceptable Load Time: 3-5 seconds

---

## Summary of Test Cases
| Test ID | Test Name | Type | Priority |
|---------|-----------|------|----------|
| TC-AE-001 | Verify Login/Signup Page Load | Functional | High |
| TC-AE-002 | Verify "New User Signup!" Section is Visible | Functional | High |
| TC-AE-003 | Verify Name Field is Enabled and Accepts Input | Functional | High |
| TC-AE-004 | Verify Email Field is Enabled and Accepts Input | Functional | High |
| TC-AE-005 | Verify Signup Button is Visible and Enabled | Functional | High |
| TC-AE-006 | Complete Signup Flow - Happy Path | E2E/Functional | Critical |
| TC-AE-007 | Verify Error Handling - Empty Name Field | Negative | Medium |
| TC-AE-008 | Verify Error Handling - Empty Email Field | Negative | Medium |
| TC-AE-009 | Verify Error Handling - Invalid Email Format | Negative | Medium |
| TC-AE-010 | Verify Page Response Time | Performance | Medium |

---

**Document Generated:** June 3, 2026  
**Based On:** automationExerciseSignup.spec.ts  
**Test Application:** Automation Exercise (https://automationexercise.com)
