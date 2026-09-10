//? Locators - locators are selectors which are used for identifying and interacting with the elements on a webpage during the tests.
//? there are three types of locator - 
/**
 * 1. CSS Selector
 * 2. Xpath -
    a. Absolute Xpath
    b. Relative Xpath
* 3. getByMethods --> most important and recommend locator in playwright.
 */

//? CSS Selector - (selector are the patterns / rule uused to identify and locate an element on a web page.)

/**
 * tagname selector
 * id selector
 * class selector
 * tagname+id selector
 * tagname+class selector
 */

import {test} from '@playwright/test'

//? tagname selector - it is used for locating an element with its tagname.
//! syntax --> await page.locator('//tagname').method()

// test('tagname-selector',async({page})=>{
//     await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
//     await page.locator('//button').click()
// })

//? id selector - it is used for locating an element based on its id and the id is represented with the help of #.
//! syntax --> await page.locator('#id_value').method()

// test('id-selector',async({page})=>{
//     await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
//     await page.locator('#name').fill('Ankita')
// })

//? class selector - the class selector is used for locating an element with the help of its class values and it is denoted with .
//! syntax - await page.locator('.class_value).method()

// test('class-selector',async({page})=>{
//     await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
//     await page.locator('.underline').click()
// })

//? tagname + id-selector - it is used for locating an element based on the tagname and the id value of that element.
//! await page.locator('tagname#value').method()

// test('tagname + id-selector',async({page})=>{
//     await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
//     await page.locator('input#email').fill('abc@gmil.com')
// })

//? tagname + class-selector - it is used for locating an element ased on the tagname and the class value of that element.
//! await page.locator('tagname.value').method()

// test('tagname + class-selector',async({page})=>{
//     await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
//     await page.locator('button.poppins').click()
// })

//? xpath - XML locator which is used for writing a path of an elements in two ways :-
/**
 * Absolute xpath - this xpath is used for locating an element from the scratch.
 */

// test('absolute-Xpath',async({page})=>{
//     await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
//     await page.locator('xpath = html/body/div[1]/div/div[2]/div/section/main/section/article[1]/aside/article/aside[2]/div/div/form/div[1]/input').fill('Ankita')
// })

//? Relative xpath - it is also one of the type of xpath which is used for locating an element present anywhere inside the DOM(Document Object model) as well as it is more convienent to write the location of the element. 
//! syntax - //tagname[@attribute_value] 
//! syntax - //tagname[text()='value'] or //tagname[.()='value']

//? using attributes - 

// test('xpath-attribute',async({page})=>{
//     await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
//     await page.locator('//button[@type="submit"]').click() 
// })

//? using text function - 

// test('xpath-text-function',async({page})=>{
//     await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
//     await page.locator('//button[text()="Register"]').click() 
// })

//? using id as an attribute - 

// test('id-attribute',async({page})=>{
//     await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
//     await page.locator('//input[@id="name"]').fill('abc')
// })

//? using placeholder as an attribute - 

// test('placeholder-attribute',async({page})=>{
//     await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
//     await page.locator('//input[@placeholder="Enter Your Email"]').fill('abc@gmail.com')
// })

//? using contains - syntax - //tagname[contains('@attribute_name,value')]

// test('contains',async({page})=>{
//     await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
//     await page.locator('//a[contains(@class,"poppins")]').click()
// })

//? mutiple attribute - 

// test('multiple-attribute',async({page})=>{
//     await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
//     await page.locator('//input[@type="text"and@placeholder="Enter your name"]').fill('abc')
// })

//! task - 
// test('placeholder-attribute',async({page})=>{ 
//     await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
//     await page.locator('//input[@placeholder="Enter Your Email"]').fill("abc@gmail.com")
// }) 

// test('task5',async({page})=>{
//     await page.goto('https://demoapps.qspiders.com/ui/duplicate?sublist=0&scenario=1')
//     await page.locator('(//input[@value="Add to Cart"])[1]').click()
//     await page.locator('(//input[@value="Add to Cart"])[2]').click()
// })

// test('relational-xpath',async({page})=>{
//     await page.goto('https://demoapps.qspiders.com/ui/duplicate?sublist=0&scenario=1')
//     await page.locator('//div[contains(@class,"flex flex-col bg-gray-200 justify-evenly")][2]/descendant::input[@value="Add to Cart"]').click()
// })

//? task1 - 

// test('samsung phone',async({page})=>{
//     await page.goto('https://www.amazon.in/s?k=samsung&crid=3VOBY9BB010LA&sprefix=samsung%2Caps%2C242&ref=nb_sb_noss_2')
    // let a = await page.locator('//span[.="Galaxy M17 5G Mobile (Moonlight Silver, 6GB RAM, 128GB Storage) | 50MP OIS Triple Camera | Gorilla Glass Victus| IP54 | 6 Gen OS Upgrades | AI | Gemini Live | Lag-free Gaming | Without Charger"]/ancestor::div[@class="puisg-col-inner"]/descendant::span[@class="a-price"]').textContent()
//     let b = await page.locator('(//h2[@class="a-size-medium a-spacing-none a-color-base a-text-normal"])[1]/ancestor::div[@class="puisg-col-inner"]/descendant::span[@class="a-price-whole"]').textContent()
//     console.log(b);
// })

//? getbymethods - 

//? getbyRole() - it is used for locating an element based on the role.
//! page.getbyRole('')

// test('getbyrole()',async({page})=>{
//     await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
//     await page.getByRole('button').click()
// })

// test('getbyrole()',async({page})=>{
//     await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
//     await page.getByRole("textbox",{name:"email"}).fill('manasa@gmail.com')
// })

//? getbyText() - it is used for locating an element based on the visible text.

// test('getbytext()',async({page})=>{
//     await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
    // await page.getByText('Register').nth(1).click()
    // await page.getByText('Name').textContent()
//     await page.getByText(' Login Now').click()
// })

//? getbyPlaceholder() - it used to target an elemnt having a placeholder attribute value.

// test('getbyplaceholder',async({page})=>{
//     await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
//     await page.getByPlaceholder('Enter your password').fill('123456789')
// })

//? getbyLabel() - it is used to locate an element based on the label name.

// test('getbylabel()',async({page})=>{
//     await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
//     await page.getByLabel('Name').fill('abc')
// })

//? getbyaltText() -it is used for locating an element based on the alternative text.

// test('getbyalttext()',async({page})=>{
    // await page.goto('https://demoapps.qspiders.com/ui/image/linkImage?sublist=1')
    // await page.getByAltText('broken image').nth(1).click()

//     await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
//     await page.getByAltText('signin')
// })

//? getbyTitle() - it is used for locating an element based on the title.

// test('getbyTitle()',async({page})=>{
    // await page.goto('https://www.amazon.in/')
    // await page.getByTitle('Watch now').click()
    // await page.getByTestId('OverlayClick').click()
// })


//? kabaddi game - 

test('kabaddi',async({page})=>{
    await page.goto('https://www.prokabaddi.com/standings')
    let team_name = "Bengaluru Bulls"
    let play = await page.locator(`//p[.='${team_name}']/ancestor::div[@class="row-head"]//div[@class="table-data matches-play"]`).textContent()
    console.log(play);
    let won = await page.locator(`//p[.='${team_name}']/ancestor::div[@class="row-head"]//div[@class="table-data matches-won"]`).textContent()
    console.log(won);
})