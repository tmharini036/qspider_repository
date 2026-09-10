//? browser control - Browser control in playwright refers to a set of commands / methods which is used to programmaticaly control and interact with the browser during automation testing.

//? chromium.launch() - it is used to provide a new chromium browser instance for automation testing.
//! syntax - let browser = await chromium.launch()

// import {chromium, test} from '@playwright/test'

// test('chromium_launch',async()=>{
//     let browser = await chromium.launch()
// })

//? browser.newContext() - it is used to provide a new conetext in a browser
//! syntax - let context = await browser.newContext()

// test('browser_context',async()=>{
//     let browser = await chromium.launch()
//     let context = await browser.newContext()
// })

//? context.newPage - it is used to create a new page in the context of the browser.
//! syntax - let page = await context.newPage()

// test('new_page',async()=>{
//     let browser = await chromium.launch()
//     let context = await browser.newContext()
//     let page = await context.newPage()
// })

//? page.viewportSize({height, width}) - it is used to provide the height and width of the viewport.

// test('viewportsize',async()=>{
//     let browser = await chromium.launch()
//     let context = await browser.newContext()
//     let page = await context.newPage()
//     await page.viewportSize({width:1580,height:1580})
// })

//? page.title() - it is used to get the title to the web page.

// test('viewportsize',async({page})=>{
    // let browser = await chromium.launch()
    // let context = await browser.newContext()
    // let page = await context.newPage()
    // await page.viewportSize({width:1580,height:1580})
//     page.goto('https://www.amazon.in/')
//     let a = await page.title()
//     console.log(a);
// })

//? page.goto() - it is used to launch a url into the browser.

// test('new_page',async()=>{
//     let browser = await chromium.launch()
//     let context = await browser.newContext()
//     let page = await context.newPage()
// })