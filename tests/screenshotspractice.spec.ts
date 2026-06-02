import { expect,test } from "@playwright/test";

test("verify the screenshots functionality", async({page})=>{
    await page.goto("https://myschoolone.com/hisp");

    const timestamp=Date.now();
    //full page
    await page.screenshot({path:'screenshots/'+'school'+timestamp+'.png'});

})