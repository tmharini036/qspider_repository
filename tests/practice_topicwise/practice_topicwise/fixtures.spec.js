//? fixtures - it is an inbuilt environment which provides all the things that a test script wants. 
//! There are three major fixtures :-
/**
 * browser - launches the browser
 * context - browser context
 * page - opening a new page
 */

// import {test} from '@playwright/test'

// test("amazon",async({page})=>{
//     await page.goto('https://www.amazon.in/')
// })

// test('without fixture',async({browser})=>{
//     let context = await browser.newContext()     //~ this line is used for creating a context inside the browser.
//     let page = await context.newPage()     //~ this line is used for crating a new page inside the context.
//     await page.goto('https://www.amazon.in/')  //~ this line is used for launching a url in the browser.
//     await context.close()               //~ this line is used to stop the execution.
// })