//? wait statements - Wait statements are used to make the test execution wait untill and unless the condition or web elements occur.

import {test} from '@playwright/test'

//? Auto waits - it will automatically make the test execution waits for some time untill unless the code is ready for th execution.

// test('auto waits',async({page})=>{
//     await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
//     await page.locator('#name').fill('abc')
// })

//? Explicit wait statements - 

//? page.waitforTimeout() - it is used for executing the task after a certain delay of time.

// test('auto waits',async({page})=>{
//     await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
//     await page.waitForTimeout(5000)
//     await page.locator('#name').fill('abc')
// })

//? page.waitforselector()  - it is going to wait for an element matching with a selector.

// test('auto waits',async({page})=>{
//     await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
//     await page.waitForSelector('#name')
//     await page.locator('//input[@placeholder="Enter your name"]').fill('abc')
//     await page.waitForSelector('//button[@type="submit"]')
   
// })

//? page.waitforloadstate() -
/**
 * load - it will wait until the event ocured.
 * documentloaded - it will wait untill and unless the html document is completely loaded and parsed.
 * networkidle - it is going to wait untill and unless there are no networks connection for the short period of time.
 */

// test('loadstate',async({page})=>{
//     await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
//     await page.waitForLoadState('load')
//     console.log("page is loaded");
// })

//? page.waitforurl - it is going to wait for the url to be appeared.

// test('auto waits',async({page})=>{
//     await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
//     await page.locator('#name').fill('abc')
//     await page.locator('#email').fill('abc@gmail.com')
//     await page.locator('#password').fill('abc123')
//     await page.locator('//button[@type="submit"]').click()
//     await page.waitForURL('https://demoapps.qspiders.com/ui/login')
//     console.log('page got launched');
// })

//? page.waitfor() - it is used to wait for a particular element with its specified state.
/**
 * visible - element is visible.
 * hidden - element is hidden.
 * attached - the element exist in the dom structure.
 * detached - the element is removed from the dom structure.
 */

// test('waitfor',async({page})=>{
//     await page.goto('https://demoapps.qspiders.com/ui/button?sublist=0')
//     let btn = page.locator('#btn')
//     await btn.waitFor({
//         state:'visible'
//     })
//     await btn.click()
// })

//? waitForEvent() - it waits for an event to complete.

// test('waitforEvent',async({page})=>{
//     await page.goto('https://demoapps.qspiders.com/ui/download?sublist=0')
//     await page.locator('#writeArea').fill('hello everyone')
//     let [a] = await Promise.all([
//         page.waitForEvent('download'),
//         page.locator('#downloadButton').click()
//     ])
// })