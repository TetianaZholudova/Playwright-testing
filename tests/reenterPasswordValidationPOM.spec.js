import { test, expect } from '@playwright/test';
import WelcomePage from '../src/pageObjects/welcomePage/WelcomePage';
import RegisterPopUp from '../src/pageObjects/welcomePage/components/RegisterPopUp';


test.describe('Re-enter password validation', () => {
    test.beforeEach(async ({page}) => {
        const welcomePage = new WelcomePage(page)
        await welcomePage.navigate()
        await welcomePage.signUpBtn.click()
})

test('should show "Re-enter password required" when the password field is empty', async ({page}) => {
    
    const registerPopUp = new RegisterPopUp (page)
    await registerPopUp.signupRepeatPassword.focus()
    await registerPopUp.signupRepeatPassword.blur()

    await expect(registerPopUp.invalidRepeatPassswordMessage).toHaveText('Re-enter password required'); 
    await expect(registerPopUp.invalidRepeatPassswordMessage).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    })

test('should show "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter" when the password field contains 7 characters', async ({page}) => {
    
    const registerPopUp = new RegisterPopUp (page)
    await registerPopUp.signupRepeatPassword.fill('8Aatest')
    await registerPopUp.signupRepeatPassword.blur()
    
    await expect(registerPopUp.invalidRepeatPassswordMessage).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter'); 
    await expect(registerPopUp.invalidRepeatPassswordMessage).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    })

test('should show "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter" when the password field contains 16 characters', async ({page}) => {
     
    const registerPopUp = new RegisterPopUp (page)
    await registerPopUp.signupRepeatPassword.fill('8Aatest8Aatest78')
    await registerPopUp.signupRepeatPassword.blur()
        
    await expect(registerPopUp.invalidRepeatPassswordMessage).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter'); 
    await expect(registerPopUp.invalidRepeatPassswordMessage).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    })

test('should show "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter" when the password field does not contain 1 capital letter', async ({page}) => {
  
    const registerPopUp = new RegisterPopUp (page)
    await registerPopUp.signupRepeatPassword.fill('8aatest8aatest7')
    await registerPopUp.signupRepeatPassword.blur()

    await expect(registerPopUp.invalidRepeatPassswordMessage).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter'); 
    await expect(registerPopUp.invalidRepeatPassswordMessage).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    })
            
test('should show "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter" when the password field does not contain 1 small letter', async ({page}) => {
    
    const registerPopUp = new RegisterPopUp (page)
    await registerPopUp.signupRepeatPassword.fill('8AATEST8AATEST7')
    await registerPopUp.signupRepeatPassword.blur()
    
    await expect(registerPopUp.invalidRepeatPassswordMessage).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter'); 
    await expect(registerPopUp.invalidRepeatPassswordMessage).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    })

test('should show "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter" when the password field does not contain 1 interger', async ({page}) => {
    
    const registerPopUp = new RegisterPopUp (page)
    await registerPopUp.signupRepeatPassword.fill('8AATEST8AATEST7')
    await registerPopUp.signupRepeatPassword.blur()
                    
    const invalidPasswordMessage = page.locator('.invalid-feedback > p')
    await expect(registerPopUp.invalidRepeatPassswordMessage).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter'); 
    await expect(registerPopUp.invalidRepeatPassswordMessage).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    })

})
