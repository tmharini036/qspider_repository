let ExcelJs = require('exceljs')

async function readExcel(filepath,sheetname){
    let workbook = new ExcelJs.Workbook()
    await workbook.xlsx.readFile(filepath);
    let worksheet = workbook.getWorksheet(sheetname)
    return worksheet
}

module.exports = {readExcel} 