//? Windows handling - Window handling in playwright is a concept used when the application moves beyond the main web page.
/**
 * Multiple tab
 * Iframes
 * File Uploading
 * file downloading
 * notifications
 */

// import {test} from '@playwright/test'

//? Multiple tabs - 

// test('Multiple tab',async({page})=>{
//     page.goto('https://demoapps.qspiders.com/ui/browser/multipleTabs?sublist=3')
//     let [a] = await Promise.all([
//         page.waitForEvent('popup'),
//         page.locator("//button[.='Shop Now']").click()
//     ])
    // a.waitForLoadState();
    // console.log(await a.url);
    // console.log(await a.title);
// })

//? iframe - 

// test('iframe',async({page})=>{
//     await page.goto('https://demoapps.qspiders.com/ui/frames?sublist=0')
//     let a = await page.frameLocator('//iframe[@class="w-full h-96"]')
//     await a.locator('//input[@name="username"]').fill('abc')
//     await page.waitForTimeout(2000)
//     await a.locator('//input[@name="password"]').fill('abc123')
//     await page.waitForTimeout(2000)
//     await a.locator('//button[@type="submit"]').click()
//     await page.waitForTimeout(2000)
// })

//? file downloading - 

// test('file download',async({page})=>{
//     await page.goto('https://demoapps.qspiders.com/ui/download?sublist=0')
//    await page.locator('//textarea[@placeholder="Enter text here"]').fill('hi everyone a very good morning🌞')
//    await page.waitForTimeout(2500)
//     let download_file =  page.waitForEvent('download')
//     await page.locator('//button[@id="downloadButton"]').click()
//     await page.waitForTimeout(2500)
//    let download = await download_file;
//    await download.saveAs('mytextfile.txt')
//    await page.waitForTimeout(2500)
// })

//? file uploading - 

// test('file uploading',async({page})=>{
//     await page.goto('https://demoapps.qspiders.com/ui/fileUpload?sublist=0')
//     await page.locator('#fullName').fill('abc')
//     await page.waitForTimeout(2500)
//     await page.locator('#emailId').fill('abc@gmail.com')
//     await page.waitForTimeout(2500)
//     await page.locator('#password').fill('abc123')
//     await page.waitForTimeout(2500)
//     await page.locator('#mobile').fill('9856321047')
//     await page.waitForTimeout(2500)
//     await page.locator('#city').selectOption('Mumbai')
//     await page.waitForTimeout(2500)
//     await page.locator('#resume').setInputFiles('C:/Users/Admin/OneDrive/Desktop/typescript_accessmodifier_encapsulation_notes..pdf')
//     await page.waitForTimeout(2500)
//     await page.locator('//option[@value="Javascript"]').click()
//     await page.waitForTimeout(2500)
//     await page.locator('#alert').check()
//     await page.waitForTimeout(2500)
//     await page.locator('//button[@type="submit"]').click()
//     await page.waitForTimeout(2500)
// })

//? notification - 

// test('notification',async({browser})=>{
//     let context = await browser.newContext({permissions:['notifications']})
//     let page = await context.newPage()
//     await page.goto('https://demoapps.qspiders.com/ui/browserNot?sublist=0')
//     await page.locator('#browNotButton').click()

    //~ allow notification - 

    // let result  = await page.evaluate(async()=>{
    //     return await Notification.requestPermission()
    // })
    // console.log(`permission :${result}`);

    // ~ not give permission  - 

    // await context.clearPermissions()
    // let result = await page.evaluate(async()=>{
    //     return await Notification.requestPermission()
    // })
    // console.log(`permission :${result}`);
// })
