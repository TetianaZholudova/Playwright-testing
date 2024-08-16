import { test, expect } from '@playwright/test';
import WelcomePage from '../src/pageObjects/welcomePage/WelcomePage';
import RegisterPopUp from '../src/pageObjects/welcomePage/components/RegisterPopUp';


test.describe('LastName validation', () => {
    test.beforeEach(async ({page}) => {
        const welcomePage = new WelcomePage(page)
        await welcomePage.navigate()
        await welcomePage.signUpBtn.click()
})

test('should show "Last name required" when the lastname field is empty', async ({page}) => {

    const registerPopUp = new RegisterPopUp (page)
    await registerPopUp.signupLastName.focus()
    await registerPopUp.signupLastName.blur()

    await expect(registerPopUp.invalidLastNameMessage).toHaveText('Last name required')
    await expect(registerPopUp.invalidLastNameMessage).toHaveCSS('border-color', 'rgb(220, 53, 69)')
    })

test('should show "Last name has to be from 2 to 20 characters long" when the last name contains 1 letter', async ({page}) => {
    
    
    const registerPopUp = new RegisterPopUp (page)
    await registerPopUp.signupLastName.fill('Z')
    await registerPopUp.signupLastName.blur()

    await expect(registerPopUp.invalidLastNameMessage).toHaveText('Last name has to be from 2 to 20 characters long'); 
    await expect(registerPopUp.invalidLastNameMessage).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    })

test('should show "Last name has to be from 2 to 20 characters long" when the last name contains 21 letters', async ({page}) => {
   
    const registerPopUp = new RegisterPopUp (page)
    await registerPopUp.signupLastName.fill('ZholudovaZholudovaZholudovaZholudova')
    await registerPopUp.signupLastName.blur()    
    
        
    await expect(registerPopUp.invalidLastNameMessage).toHaveText('Last name has to be from 2 to 20 characters long'); 
    await expect(registerPopUp.invalidLastNameMessage).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    })

test('should show "Last name is invalid" when the last name contains special characters', async ({page}) => {
     
    const registerPopUp = new RegisterPopUp (page)
    await registerPopUp.signupLastName.fill('Zhol^&*')
    await registerPopUp.signupLastName.blur()         

    await expect(registerPopUp.invalidLastNameMessage).toHaveText('Last name is invalid'); 
    await expect(registerPopUp.invalidLastNameMessage).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    })

test('should show "Name is invalid" when the username contains digits', async ({page}) => {
    
    const registerPopUp = new RegisterPopUp (page)
    await registerPopUp.signupLastName.fill('Zholudova123')
    await registerPopUp.signupLastName.blur()               

    await expect(registerPopUp.invalidLastNameMessage).toHaveText('Last name is invalid'); 
    await expect(registerPopUp.invalidLastNameMessage).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    })
})
