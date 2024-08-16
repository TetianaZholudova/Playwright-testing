import { test, expect } from '@playwright/test';
import WelcomePage from '../src/pageObjects/welcomePage/WelcomePage';
import RegisterPopUp from '../src/pageObjects/welcomePage/components/RegisterPopUp';


test.describe('Registration POM', () => {
    
    test('verify if user is able to register in system POM', async ({page}) => {
        const welcomePage = new WelcomePage(page)
        await welcomePage.navigate()
        await welcomePage.signUpBtn.click()
        
        const registerPopUp = new RegisterPopUp(page)
        
        
        await registerPopUp.signupName.fill('Juliette')
        await registerPopUp.signupLastName.fill('Wade')
        await registerPopUp.signupEmail.fill('aqa-xajaveppeicu-7911@yopmail.com')
        await registerPopUp.signupPassword.fill('fghRTY789AA')
        await registerPopUp.signupRepeatPassword.fill('fghRTY789AA')
        await registerPopUp.registerButton.click()
    
    
    })
    
    
    })