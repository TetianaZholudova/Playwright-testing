import { test, expect } from '@playwright/test';
import WelcomePage from '../src/pageObjects/welcomePage/WelcomePage';



test.describe.only('Login validation POM', () => {

    let signInPopUp

test.beforeEach(async ({page}) => {
    const welcomePage = new WelcomePage(page)
    await welcomePage.navigate()
    signInPopUp = await welcomePage.header.clickSignInBtn();
})    

test('empty email', async({page}) => {
await signInPopUp.signinEmail.focus()
await signInPopUp.signinEmail.blur()

await expect(signInPopUp.invalideEmailMessage).toHaveText('Email required'); 
await expect(signInPopUp.invalideEmailMessage).toHaveCSS('border-color', 'rgb(220, 53, 69)');  

}    
)

test ('empty password', async({page}) => {

await signInPopUp.signinPassword.focus()
await signInPopUp.signinPassword.blur() 

await expect(signInPopUp.invalidPasswordMessage).toHaveText('Password required'); 
await expect(signInPopUp.invalidPasswordMessage).toHaveCSS('border-color', 'rgb(220, 53, 69)');

}
)
})