import{test} from'@playwright/test'
import login from '../../data_driven_testing/login.json'

test('user',async({page})=>{

    for(const data of login)
    {
       await page.goto(data.url)
       await page.locator('#email').fill(data.email)
       await page.locator('#password').fill(data.Password)
       await page.locator('//button[@type="submit"]').click()

    }

})
