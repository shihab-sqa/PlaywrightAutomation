const{test,expect}=  require("@playwright/test");
const path = require("path");

test("Automation Practice",async({page})=>{

await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
 const rdobtn=page.locator("[value='radio1']");
 await rdobtn.click();

await expect (rdobtn).toBeChecked();
await page.locator("#autocomplete").fill("Bangladesh");

const dropdown=  await page.locator("#dropdown-class-example").selectOption("option3");

const checkbox= page.locator("#checkBoxOption3");

await checkbox.click();

await expect (checkbox).toBeChecked();

const alert= page.locator("#alertbtn");
await alert.click();

page.on ("dialog",dialog=>dialog.accept);
})


test ("Handle Child Window",async({browser})=>{

   const context= await browser.newContext();
  const  page = await context.newPage();
await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    const link= page.locator("#openwindow");


    const [new_page]= await Promise.all([

      context.waitForEvent('page'),
      await link.click(),

    ])

await expect (new_page).toHaveURL("https://www.qaclickacademy.com/");

await page.locator("#dropdown-class-example").screenshot({path:"shot.png"});

 expect  (await page.screenshot()).toMatchSnapshot("snap.png");

const framepage= page.frameLocator("#courses-iframe");

const inframe= await framepage.locator("(//a[@href='mentorship'][normalize-space()='Mentorship'])[1]").click();

await page.screenshot({path:'tests.png'});





});

test("File Upload",async({page})=>{
 
    await page.goto("https://qa-automation-practice.netlify.app/file-upload.html")

    await page.locator("#file_upload").setInputFiles("tests\\pp.jpg");

    await page.locator("button[type='submit']").click();



});

test("Keyboard Action",async({page})=>{


await page.goto("https://practice.expandtesting.com/key-presses")

const key= await  page.locator("#target").click();

await page.keyboard.down('Enter');

await page.keyboard.press('Shift+A');

await page.waitForTimeout(3000);




});

test("Mouse Hover",async({page})=>{

await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

 page.locator("#mousehover");

 await page.locator("body > div:nth-child(5) > div:nth-child(2) > fieldset:nth-child(2) > div:nth-child(2) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(4) > td:nth-child(3)").dblclick();

 await page.waitForTimeout(300);

 await page.locator("#name").click({button:'right'});
 await page.waitForTimeout(3000);

})