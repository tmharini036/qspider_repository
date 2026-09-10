//? radio button - it is an option provided to choose only one option from multiple of selection.

//? checkbox - it is an option provided to choose mutlple of option from multiple of selection.

//~ check()
//~ uncheck()
//~ tobechecked()  --> one of the type of assertion

import {expect, test} from '@playwright/test'

//! radio button - 

// test('radio button',async({page})=>{
//     await page.goto('https://demoapps.qspiders.com/ui/radio?sublist=0')
//     await page.locator('//input[@id="attended"]').check()
//     await page.locator('//input[@id="attended"]').uncheck()
//     await page.waitForTimeout(3000)
// })

//! checkbox - 

// test('checkbox', async({page})=>{
//     await page.goto('https://demoapps.qspiders.com/ui/checkbox?sublist=0')
//     let a = await page.locator('//input[@id="domain_a"]')
//     await a.check()
//     await page.waitForTimeout(2500)
//     let b = await page.locator('//input[@id="domain_c"]')
//     await b.check()
//     await page.waitForTimeout(3000)
//     await expect(a).toBeChecked()
//     await page.waitForTimeout(3000)
//     await expect(b).toBeChecked()
//     await page.waitForTimeout(2500)
//     await page.locator('//input[@id="domain_c"]').uncheck()
// })

//? Dropdown - 

// test('dropdown select-one',async({page})=>{
//     await page.goto('https://demoapps.qspiders.com/ui/dropdown?sublist=0')
//     await page.locator('//select[@id="select3"]').click()
//     await page.waitForTimeout(1500)
    // await page.locator('//select[@id="select3"]').selectOption("India")
    // await page.locator('//select[@id="select3"]').selectOption({value:"India"})
    // await page.locator('//select[@id="select3"]').selectOption({index:7})
//     await page.waitForTimeout(1500)
    
// })

// test('dropdown multiple select',async({page})=>{
//     await page.goto('https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1')
//     await page.locator('//select[@id="select-multiple-native"]').selectOption({index:2},{index:4},{index:6})
//     await page.locator("//button[.='Add']").click()
// })

// test('select Samsung brand', async({ page }) => { 
//     await page.goto('https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles'); 
//     await page.locator('//i[@class="a-icon a-icon-checkbox"]/preceding-sibling::input[@id="apb-browse-refinements-checkbox_0"]').check();
//     await page.waitForTimeout(2500) 
// })

// test('fp',async({page})=>{
//     await page.goto('https://www.flipkart.com/search?q=mobiles&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off')
//     await page.locator(`//div[@class="ybaCDx"]/following-sibling::div[.='Apple']`).check()
// })