import { test, expect } from '@playwright/test';
import WelcomePage from '../src/pageObjects/welcomePage/WelcomePage';


test.describe('Login POM', () => {

    let signInPopUp

test.beforeEach(async ({page}) => {
    
    const welcomePage = new WelcomePage(page)
    await welcomePage.navigate()
    signInPopUp = await welcomePage.header.clickSignInBtn();
})    
    
test('verify if user is able to login successfully', async ({page}) => {

await signInPopUp.fillSignInPopUpForm({
        email: 'aqa-xajaveppeicu-7909@yopmail.com',
        password: 'fghRTY789AA'
    })
await signInPopUp.logInButton.click()     
})
})