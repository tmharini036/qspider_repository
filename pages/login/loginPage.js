class page1{
    constructor(page){
        this.page=page
        this.Username = page.locator('#name')
        this.email=page.locator('#email')
        this.password = page.locator('#password')
        this.reg_button=page.locator("//button[.='Register']")
    }

     async enter_username(name){
        await this.username.fill(name)
    }

    async enter_email(email){
        await this.mail.fill(email)
    }

    async enter_password(pswd){
        await this.password.fill(pswd)
    }

    async click_register(){
        await this.reg_button.click()
    }
}

module.exports = {page1} 
