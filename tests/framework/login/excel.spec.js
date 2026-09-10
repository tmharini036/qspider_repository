import {test} from '@playwright/test'
let ExcelJs = require('exceljs')
import { readExcel } from '../../../utils/excel'

test('excelsheet',async({page})=>{
    let workbook = new ExcelJs.Workbook()
    await workbook.xlsx.readFile('data_driven_testing/login.xlsx')
    let worksheet = workbook.getWorksheet("login")
    let name = worksheet.getCell("A2").value
    let email = worksheet.getCell("B2").value
    let password = worksheet.getCell('C2').value
    await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
    await page.locator('#name').fill(name)
    await page.locator('#email').fill(email)
    await page.locator('#password').fill(password)
    await page.locator("//button[.='Register']").click()
}) 