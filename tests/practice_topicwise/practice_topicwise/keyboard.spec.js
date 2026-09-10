//? keyboard Action - it is used for working with the keyboard.

import {test} from '@playwright/test'

//? fill() - it is used to provide the entire text directly into the input box.

// test('fill',async({page})=>{
//     await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
//     await page.locator('//input[@id="name"]').fill('abc')
//     await page.waitForTimeout(2000)
// })

//? type() - it is used to provide the entire text character by character into the input box.

// test('type',async({page})=>{
//     await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
    // await page.locator('//input[@id="email"]').type('abc@gmail.com')   //! directly using type()
//     await page.locator('//input[@id="email"]').click()
//     await page.waitForTimeout(1000)
//     await page.keyboard.type('abc@gmail.com')
//     await page.waitForTimeout(3000)
// })

//? insertText - 

// test('insertText',async({page})=>{
//     await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
//     await page.locator('//input[@id="password"]').click()
//     await page.keyboard.insertText('abc@123')
// })

//? Press multiple keys - 

// test('multiple keys',async({page})=>{
//     await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
//     await page.locator('//input[@id="name"]').fill('abc')
//     await page.keyboard.press('Tab')
//     await page.keyboard.type('abc@gmail.com')
//     await page.keyboard.press('Control+A')
//     await page.keyboard.press('Control+C')
//     await page.keyboard.press('Tab')
//     await page.keyboard.press('Control+V')
//     await page.waitForTimeout(2500)
//     await page.keyboard.press('Enter')
// })


//? down & up arrow - 

// test('down and up',async({page})=>{
//     await page.goto('https://www.amazon.in/')
//     await page.locator('//input[@id="twotabsearchtextbox"]').click()
//     await page.keyboard.insertText('perfume')
//     for(let index = 1;index<=2;index++){
//         await page.keyboard.press('ArrowDown')
//     }
//     await page.keyboard.press('Enter')
// })

// test('TC02',async({page})=>{ 
// await page.goto('https://demoapps.qspiders.com/ui/login3.0?sublist=0&scenario=1') 
// await page.locator('//input[@placeholder="Username"]').fill("playwrightlogin") 
// await page.keyboard.press('Tab') 
// await page.waitForTimeout(1500)
// }) 