import { test, expect } from '@playwright/test';
import WelcomePage from '../src/pageObjects/welcomePage/WelcomePage';
import RegisterPopUp from '../src/pageObjects/welcomePage/components/RegisterPopUp';


test.describe('Password validation', () => {
    test.beforeEach(async ({page}) => {
        const welcomePage = new WelcomePage(page)
        await welcomePage.navigate()
        await welcomePage.signUpBtn.click()
})

test('should show "Password required" when the password field is empty', async ({page}) => {
    
    const registerPopUp = new RegisterPopUp (page)
    await registerPopUp.signupPassword.focus()
    await registerPopUp.signupPassword.blur()
    
    await expect(registerPopUp.invalidPassswordMessage).toHaveText('Password required'); 
    await expect(registerPopUp.invalidPassswordMessage).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    })

test('should show "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter" when the password field contains 7 characters', async ({page}) => {
    
    const registerPopUp = new RegisterPopUp (page)
    await registerPopUp.signupPassword.fill('8Aatest')
    await registerPopUp.signupPassword.blur()
    
    await expect(registerPopUp.invalidPassswordMessage).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter'); 
    await expect(registerPopUp.invalidPassswordMessage).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    })

test('should show "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter" when the password field contains 16 characters', async ({page}) => {
      
    const registerPopUp = new RegisterPopUp (page)
    await registerPopUp.signupPassword.fill('8Aatest8Aatest78')
    await registerPopUp.signupPassword.blur()
        
    await expect(registerPopUp.invalidPassswordMessage).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter'); 
    await expect(registerPopUp.invalidPassswordMessage).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    })

test('should show "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter" when the password field does not contain 1 capital letter', async ({page}) => {
    
            
    const registerPopUp = new RegisterPopUp (page)
    await registerPopUp.signupPassword.fill('8aatest8aatest7')
    await registerPopUp.signupPassword.blur()
            
    await expect(registerPopUp.invalidPassswordMessage).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter'); 
    await expect(registerPopUp.invalidPassswordMessage).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    })
            
test('should show "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter" when the password field does not contain 1 small letter', async ({page}) => {
    
    const registerPopUp = new RegisterPopUp (page)
    await registerPopUp.signupPassword.fill('8AATEST8AATEST7')
    await registerPopUp.signupPassword.blur()
                
    await expect(registerPopUp.invalidPassswordMessage).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter'); 
    await expect(registerPopUp.invalidPassswordMessage).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    })

test('should show "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter" when the password field does not contain 1 interger', async ({page}) => {
                    
    const registerPopUp = new RegisterPopUp (page)
    await registerPopUp.signupPassword.fill('8AATEST8AATEST7')
    await registerPopUp.signupPassword.blur()
    
    await expect(registerPopUp.invalidPassswordMessage).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter'); 
    await expect(registerPopUp.invalidPassswordMessage).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    })

})
