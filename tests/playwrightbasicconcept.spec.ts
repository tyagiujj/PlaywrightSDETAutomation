import{test,expect,Locator} from '@playwright/test'

test("Practice of Basic Concepts of Playwright" ,async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");

const Title:String = await page.title();
console.log("Title of the page is : " , Title);
await expect(page).toHaveTitle("Automation Testing Practice");


const URL :String =await page.url();
console.log("URL of the Application is : " , URL);
await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/");

const Text : Locator= page.getByText("Automation Testing Practice");
await expect(Text).toBeVisible();

const Name : Locator=page.getByPlaceholder("Enter Name");
await expect(Name).toBeEnabled();
await Name.fill("Ujjwal Tyagi");

const Email : Locator= page.getByPlaceholder("Enter EMail");
await expect(Email).toBeEnabled();
await Email.fill("ujjwaltyagi9700@gmail.com");

const Phone : Locator =page.locator("#phone");
await expect(Phone).toBeEnabled();
await Phone.fill("9756360213");

const MaleRadioButton= page.locator("#male");
await expect(MaleRadioButton).toBeEnabled();
await MaleRadioButton.click();
await expect(MaleRadioButton).toBeChecked();

const CheckBox =page.locator("#sunday");
await expect(CheckBox).toBeEnabled();
await CheckBox.click();
await expect(CheckBox).toBeChecked();

//await page.locator('#country').selectOption('India'); 
await page.locator("#country").selectOption({value :'germany'});

page.on('dialog', async dialog => {

    console.log("Alert Message is : " + dialog.message());

    await dialog.accept();

});

await page.locator("#alertBtn").click();
})