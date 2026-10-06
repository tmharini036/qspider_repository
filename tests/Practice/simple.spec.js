import{chromium,expect,test} from '@playwright/test'

test('login' , async({page})=>
{
    // await page.goto("https://demoapps.qspiders.com/ui/alert/prompt?sublist=1&scenario=2")
    // await page.locator("//section[text() ='Popups']").click()
    // await page.locator("(//input[@type='checkbox'])[1]").click()
    // await page.locator("//button[@id='deleteButton']").click()

     await page.goto('https://demoapps.qspiders.com/ui/download?sublist=0')
     await expect(page).toHaveScreenshot('homepage.png')
    await page.locator('#writeArea').fill('hello everyone')
    let [a] = await Promise.all([
        page.waitForEvent('download'),
        page.locator('#downloadButton').click()
    ])


})