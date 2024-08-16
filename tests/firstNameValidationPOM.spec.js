import { test, expect } from '@playwright/test';
import RegisterPopUp from '../src/pageObjects/welcomePage/components/RegisterPopUp';
import WelcomePage from '../src/pageObjects/welcomePage/WelcomePage';


test.describe('FirstName validation', () => {
    test.beforeEach(async ({page}) => {
        const welcomePage = new WelcomePage(page)
        await welcomePage.navigate()
        await welcomePage.signUpBtn.click()
})
test('should show "Name required" when the username field is empty', async ({page}) => {
    
    const registerPopUp = new RegisterPopUp(page)
    await registerPopUp.signupName.focus()
    await registerPopUp.signupName.blur()

    await expect(registerPopUp.invalidFirstNameMessage).toHaveText('Name required')
    await expect(registerPopUp.invalidFirstNameMessage).toHaveCSS('border-color', 'rgb(220, 53, 69)')
    })

test('should show "Name has to be from 2 to 20 characters long" when the username contains 1 letter', async ({page}) => {
    
    const registerPopUp = new RegisterPopUp(page)
    await registerPopUp.signupName.fill('T')
    await registerPopUp.signupName.blur()
    
    await expect(registerPopUp.invalidFirstNameMessage).toHaveText('Name has to be from 2 to 20 characters long'); 
    await expect(registerPopUp.invalidFirstNameMessage).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    })

test('should show "Name has to be from 2 to 20 characters long" when the username contains 21 letters', async ({page}) => {
    const registerPopUp = new RegisterPopUp(page)
    await registerPopUp.signupName.fill('TetianaOleksandraCleo')
    await registerPopUp.signupName.blur()
        
    await expect(registerPopUp.invalidFirstNameMessage).toHaveText('Name has to be from 2 to 20 characters long'); 
    await expect(registerPopUp.invalidFirstNameMessage).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    })

test('should show "Name is invalid" when the username contains special characters', async ({page}) => {
    const registerPopUp = new RegisterPopUp(page)
    await registerPopUp.signupName.fill('Tetiana^&*&')
    await registerPopUp.signupName.blur()
    
    await expect(registerPopUp.invalidFirstNameMessage).toHaveText('Name is invalid'); 
    await expect(registerPopUp.invalidFirstNameMessage).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    })

test('should show "Name is invalid" when the username contains digits', async ({page}) => {
    const registerPopUp = new RegisterPopUp(page)
    await registerPopUp.signupName.fill('Tetiana123')
    await registerPopUp.signupName.blur()
                
    await expect(registerPopUp.invalidFirstNameMessage).toHaveText('Name is invalid'); 
    await expect(registerPopUp.invalidFirstNameMessage).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    })
})