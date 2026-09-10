import {test} from '@playwright/test'
import data1 from '../../../data_driven_testing/login.json'
import {page1} from '../../../pages/login/loginPage'

test('login_page',async({page})=>{
    for(let data of data1){
        let test1 = new page1(page)
            await page.goto(data.url)
            await test1.enter_username(data.username)
            await test1.enter_email(data.email)
            await test1.enter_password(data.password)
            await test1.click_register()
    }
})