//? test assertion - A test assertion is a concept in playwright which is used for validating a content whether it is working fine or not.

import {expect, test} from '@playwright/test'

//? toBeVisible - it is a method which is used to check whether the element is visible or not.

// test('tobevisible()',async({page})=>{
//     await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
//     await expect(page.locator('//button[@type="submit"]')).toBeVisible()
// })

//? tohavetext() - it is used to check whether the complete text is there or not.

// test('tohavetext()',async({page})=>{
//     await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
//     await expect(page.locator('//button[@type="submit"]')).toHaveText('Register')
// })

//? toContainText() - it checks whether the text is containing the text or not.

// test('tocontaintext()',async({page})=>{
//     await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
//     await expect(page.locator('//p[@class="poppins text-[12px] font-sans font-bold text-slate-500 relative top-3"]')).toContainText('account ')
// })

//? tohavevalue() - it is used for input fields and it checks whether the value is correct or not.

// test('tohavevalue()',async({page})=>{
//     await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
//     await page.locator('#name').fill('ankita')
//     await expect(page.locator('#name')).toHaveValue('ankita')
// })

//? tobechecked() - it is used for validating whether the checkbox is checked or not.

// test('tobechecked()',async({page})=>{
//     await page.goto('https://demoapps.qspiders.com/ui/checkbox?sublist=0')
//     await page.locator('(//input[@name="Domain"])[2]').check()
//     await expect(page.locator('(//input[@name="Domain"])[2]')).toBeChecked()
// })

//? tohaveattribute()- it is used to check whether there is an attribute and its value or not.

// test('tohaveattribute()',async({page})=>{
//     await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
//     await expect(page.locator('#name')).toHaveAttribute("name","name")
// })

//? tohavetitle() - it is used to check the title of the webpage

// test('tohavetitle()',async({page})=>{
//     await page.goto('https://demoapps.qspiders.com/ui/button?sublist=0')
//     await expect(page).toHaveTitle('DemoApps | Qspiders | Text Box')
// })

//? tohaveURL() - it is used to check whether the webpage url is correct or not.

// test('tohaveurl()',async({page})=>{
//     await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
//     await expect(page).toHaveURL('https://demoapps.qspiders.com/ui/button?sublist=0')
// })