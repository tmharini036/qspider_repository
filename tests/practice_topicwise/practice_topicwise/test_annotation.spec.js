//? test annotation - test annotation is used for managing the test execution for different scenarios like skipping a test, executing only one test,etc.`

import {test} from '@playwright/test'

//? test.skip() - it is used for skipping that particular test script.
//! syntax - test.skip("",async()=>{})

// test("case1",async({page})=>{
//     await page.goto('https://www.amazon.in/')
// })

// test.skip("case2",async({page})=>{
//     await page.goto('https://www.flipkart.com/')
// })

// test("case3",async({page})=>{
//     await page.goto('https://www.myntra.com/')
// })

// test('case4',async({page})=>{
//     await page.goto('https://www.snapdeal.com/')
// })

// test('case5',async({page})=>{
//     await page.goto('https://www.facebook.com/')
// })

//? test.only() - it is sued to executing only that particular test script where the test.only() annotation.
//! syntax - test.only("",async()=>{})

// test("case1",async({page})=>{
//     await page.goto('https://www.amazon.in/')
// })

// test("case2",async({page})=>{
//     await page.goto('https://www.flipkart.com/')
// })

// test("case3",async({page})=>{
//     await page.goto('https://in.bookmyshow.com/explore/home/mumbai')
// })

// test.only('case4',async({page})=>{
//     await page.goto('https://www.snapdeal.com/')
// })

// test.only('case5',async({page})=>{
//     await page.goto('https://www.facebook.com/')
// })

//? test.fail() - it is sed to a make a particular test script failed.

// test("case1",async({page})=>{
//     await page.goto('https://www.amazon.in/')
// })

// test.fail("case2",async({page})=>{
//     await page.goto('https://www.flipkart.com/')
// })

// test("case3",async({page})=>{
//     await page.goto('https://in.bookmyshow.com/explore/home/mumbai')
// })

// test('case4',async({page})=>{
//     await page.goto('https://www.snapdeal.com/')
// })

// test('case5',async({page})=>{
//     await page.goto('https://www.facebook.com/')
// })

//? test.fixme() - basically it is used for the playwright to understand that there is an test script which is not working as accepted / failed it can skip the test script.

// test("case1",async({page})=>{
//     await page.goto('https://www.amazon.in/')
// })

// test("case2",async({page})=>{
//     await page.goto('https://www.flipkart.com/')
// })

// test.fixme("case3",async({page})=>{
//     await page.goto('https://in.bookmyshow.com/explore/home/mumbai')
// })

// test('case4',async({page})=>{
//     await page.goto('https://www.snapdeal.com/')
// })

// test('case5',async({page})=>{
//     await page.goto('https://www.facebook.com/')
// })

//? test.slow() - These annotation will mark that test as slow and the playwright will make the triple of the default timeout. (default timeout = 30sec)

// test.slow("case1",async({page})=>{
//     await page.goto('https://www.amazon.in/')
// })

// test("case2",async({page})=>{
//     await page.goto('https://www.flipkart.com/')
// })

// test("case3",async({page})=>{
//     await page.goto('https://in.bookmyshow.com/explore/home/mumbai')
// })

// test('case4',async({page})=>{
//     await page.goto('https://www.snapdeal.com/')
// })

// test('case5',async({page})=>{
//     await page.goto('https://www.facebook.com/')
// })

//? test.setTimeout() - it is used to change the timeout for that particular test script. if we are providing 0 to a particular test script that menas there is no timeout over there.
//! syntax - test('',async()=>{test.setTimeout})

// test("case1",async({page})=>{
//     test.setTimeout(5000)
//     await page.goto('https://www.amazon.in/')
// })

// test("case2",async({page})=>{
//     await page.goto('https://www.flipkart.com/')
// })

// test("case3",async({page})=>{
//     await page.goto('https://in.bookmyshow.com/explore/home/mumbai')
// })

// test('case4',async({page})=>{
//     await page.goto('https://www.snapdeal.com/')
// })

// test('case5',async({page})=>{
//     await page.goto('https://www.facebook.com/')
// })

//? test.describe() - it is used to get the title of the test script in an arra format.

// test.describe("describe",async()=>{
//     test("case1",async({page})=>{
//         await page.goto('https://www.amazon.in/')
//     })
    
//     test("case2",async({page})=>{
//         await page.goto('https://www.flipkart.com/')
//     })
    
//     test("case3",async({page})=>{
//         await page.goto('https://in.bookmyshow.com/explore/home/mumbai')
//     })
    
//     test('case4',async({page})=>{
//         await page.goto('https://www.snapdeal.com/')
//     })
    
//     test('case5',async({page})=>{
//         await page.goto('https://www.facebook.com/')
//     })
// })