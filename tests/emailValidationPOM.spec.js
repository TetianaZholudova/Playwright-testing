import { test, expect } from '@playwright/test';
import WelcomePage from '../src/pageObjects/welcomePage/WelcomePage';
import RegisterPopUp from '../src/pageObjects/welcomePage/components/RegisterPopUp';

test.describe('Email validation', () => {
    
    test.beforeEach(async ({page}) => {
    const welcomePage = new WelcomePage(page)
    await welcomePage.navigate()
    await welcomePage.signUpBtn.click()
})

test('should show "Email required" when the email field is empty', async ({page}) => {
    
    const registerPopUp = new RegisterPopUp(page)
    await registerPopUp.signupEmail.focus()
    await registerPopUp.signupEmail.blur()
    
    await expect(registerPopUp.invalidEmailMessage).toHaveText('Email required'); 
    await expect(registerPopUp.invalidEmailMessage).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    })

test('should show "Email is incorrect" when the username contains wrong data', async ({page}) => {
    
    const registerPopUp = new RegisterPopUp(page)
    await registerPopUp.signupEmail.fill('tanya.gmail.com')
    await registerPopUp.signupEmail.blur()
  
    
    await expect(registerPopUp.invalidEmailMessage).toHaveText('Email is incorrect'); 
    await expect(registerPopUp.invalidEmailMessage).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    })


})