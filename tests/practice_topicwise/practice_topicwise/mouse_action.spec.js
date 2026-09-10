//? mouse action - it is one of the important concept of the playwright which is providing the behavior of the mouse action. It is helping us for interacting with the UI elements.

//? left - click() - the click() is used for doing the left side click of the mouse.

import {test} from '@playwright/test'

// test('left click',async({page})=>{
//     await page.goto('https://demoapps.qspiders.com/ui/button?sublist=0')
//     await page.locator('//button[@id="btn"]').click()
//     await page.waitForTimeout(2500)
// })

//? right-click() - it is used for providing the behaviour of the right click button.

// test('right click',async({page})=>{
//     await page.goto('https://demoapps.qspiders.com/ui/button/buttonRight?sublist=1')
//     await page.locator('//button[@id="btn_a"]').click({button:'right'})
//     await page.waitForTimeout(2000)
//     await page.locator('//div[.="Yes"]').click()
// })

//? double - click() - it is used for performing the double click action of the mouse.

// test('double click',async({page})=>{
//     await page.goto('https://demoapps.qspiders.com/ui/button/buttonDouble?sublist=2')
//     await page.locator('//button[@id="btn_a"]').dblclick()
//     await page.waitForTimeout(2000)
// })

//? hover - it is used for performing hovering action.
//? mouse.move - it is used to move to some extend.

// test('hover',async({page})=>{
//     await page.goto('https://demoapps.qspiders.com/ui/mouseHover?sublist=0')
//     await page.locator('//img[@class="w-5 h-5 mt-5 ml-3 cursor-pointer "]').hover()
//     await page.waitForTimeout(2500)
//     await page.mouse.move(400,400)
//     await page.waitForTimeout(4000)
// })

//? down & up - it is used for pressing the down button in the mouse and to release it we have up button.

// test('down & up',async({page})=>{
//     await page.goto('https://demoapps.qspiders.com/ui/clickHold?sublist=0')
//     await page.locator('//div[@id="circle"]').hover()
//     await page.mouse.down()  //! holding
//     await page.waitForTimeout(3000)
//     await page.mouse.up()    //! releasing
//     await page.waitForTimeout(3000)
// })

//? scroll() - it is used for scrolling the page.

// test('scroll',async({page})=>{
//     await page.goto('https://www.myntra.com/')
//     await page.waitForTimeout(2000)
//     await page.mouse.wheel(0,5000)
//     await page.waitForTimeout(3000)
//     await page.mouse.wheel(0,-5000)
//     await page.waitForTimeout(2000)
// })