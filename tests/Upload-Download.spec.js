const {test, expect} = require('@playwright/test');
const excelJs = require('exceljs');
const path = require('path');
const os = require('os');

const filePath = path.join(os.homedir(), 'Downloads', 'download.xlsx');
const textSearch = "Banana";
const updateValue = 350;

async function writeExcel(searchText, replaceText, change , filePath){
    
    const workbook = new excelJs.Workbook();
    await workbook.xlsx.readFile(filePath);
    const worksheet = workbook.getWorksheet('Sheet1');
    const output = await readExcel(worksheet, searchText);

    const cell = worksheet.getCell(output.row, output.column + change.colChange);
    console.log(cell.value);
    cell.value = replaceText;
    
    await workbook.xlsx.writeFile(filePath);
}

async function readExcel(worksheet, searchText){
    let output = {row:-1, column:-1};
    worksheet.eachRow((row, rowNumber)=>{
        row.eachCell((cell, colNumber)=>{
            if(cell.value === searchText){
                output.row = rowNumber;
                output.column = colNumber;
            }
    });

   });
   return output;
}

//writeExcel(textSearch, updateValue, { rowChange: 0, colChange: 2 }, filePath);

test("Upload download excel validation.", async({page})=>{
    await page.goto("https://rahulshettyacademy.com/upload-download-test/index.html");
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole("button", {name: "Download"}).click();
    const download = await downloadPromise;
    await download.saveAs(filePath);
    writeExcel(textSearch, updateValue, { rowChange: 0, colChange: 2 }, filePath);
    await page.locator("#fileinput").click();
    await page.locator("#fileinput").setInputFiles(filePath);
    const textLocator = page.getByText(textSearch);
    const desiredRow = await page.getByRole('row').filter({has : textLocator});
    await expect(desiredRow.locator("#cell-4-undefined")).toContainText(updateValue.toString());
    //await page.pause();


});

