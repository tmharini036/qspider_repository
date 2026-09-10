//? web elements control - there are some methods used for controling the elements present in the web.

import {test} from '@playwright/test'

//? fill() - it is used to enter into an input field, textarea or any editable element

// test('fill()',async({page})=>{
//     await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
//     await page.locator('//input[@id="name"]').fill('ABCDEFGHIJK')
// })

//? type() - it is way similar to fill() but here it provides the input character by character and it is not at all recommended.

// test('type()',async({page})=>{
//     await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
//     await page.locator('//input[@id="name"]').type('ABCDEFGHIJK')
// })

//? click() - it is used to click on a particular element which is clickable.

// test('click()',async({page})=>{
//     await page.goto('https://demoapps.qspiders.com/ui/button?sublist=0')
//     await page.locator('//button[@id="btn"]').click()
// })

//? innerText() - it is used to return the visible rendered text of an element.

// test('innertext()',async({page})=>{
//     await page.goto('https://demoapps.qspiders.com/ui/button?sublist=0')
//     let a = await page.locator('//h3[@class="poppins w-[100%] text-center text-orange-600 text-[18px]pb-8"]').innerText()
//     console.log(a);
// })

//? textContent() - it is used to return the text content contained inside the element, including the text that may not be visible currently.

// test('innertext()',async({page})=>{
//     await page.goto('https://demoapps.qspiders.com/ui/button?sublist=0')
//     await page.locator('//button[@id="btn"]').click()
//     let a = await page.locator('//span[@class="text-green-600 p-1 px-2 ms-2 rounded-md"]').textContent()
//     console.log(a);
// })

//? alltextContents() - it is used to retrieve all the text content of all matching elements.

// test('alltextcontents()',async({page})=>{
    //! example 1 - 
    // await page.goto('https://demoapps.qspiders.com/ui/table?scenario=1')
    // let a = await page.locator('//th[@scope="col"]').allTextContents()
    // console.log(a);

    //! example 2 - 
    // await page.goto('https://www.prokabaddi.com/standings')
    // let name = await page.locator('//p[@class="name"]').allTextContents()
    // console.log(name);
// })

//? all() - it is going to return all the matching elements.

// test('all()',async({page})=>{
//     await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
//     let a = await (await page.locator('input').all()).fill('abc')
//     console.log(a);
// })

//? selectOption() - basically it is used to select in anyone option from the dropdown.

// test('selectOption()',async({page})=>{
//     await page.goto('https://demoapps.qspiders.com/ui/dropdown?sublist=0')
//     await page.locator('//select[@id="select3"]').selectOption('India')
//     await page.locator('//select[@id="select5"]').selectOption('Bihar')
// })

//? pause() - it is used for debugging method, it basically pause the execution for debugging and inspecting the web page.

// test('pause()',async({page})=>{
//     await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
//     await page.pause()
//     await page.locator('//input[@id="name"]').fill('ABCDEFGHIJK')
// })