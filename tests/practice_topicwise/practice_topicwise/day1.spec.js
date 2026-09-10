//? day1.spec.js
// day1 --> filename
// spec --> specification
// js --> javascript

// import {test} from '@playwright/test'

// test("test_name",async()=>{
//     code to executed
// })

import {test} from '@playwright/test'

test("amazon",async({page})=>{
    await page.goto('https://www.amazon.in/')
})

// test ("flipkart",async({page})=>{
//     await page.goto('https://www.flipkart.com/')
// })