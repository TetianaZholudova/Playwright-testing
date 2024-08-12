import { test, expect } from '@playwright/test';


test.describe('Re-enter password validation', () => {
    test.beforeEach(async ({page})=>{
    await page.goto('/')
    const signUpBtn = page.locator('.hero-descriptor_btn')
    await signUpBtn.click()

})

test('should show "Re-enter password required" when the password field is empty', async ({page}) => {
    
    const signupRepeatPassword = page.locator('#signupRepeatPassword')
    await signupRepeatPassword.focus()
    await signupRepeatPassword.blur()
    
    const invalidPasswordMessage = page.locator('.invalid-feedback > p')
    await expect(invalidPasswordMessage).toHaveText('Re-enter password required'); 
    await expect(invalidPasswordMessage).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    })

test('should show "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter" when the password field contains 7 characters', async ({page}) => {
   
    
    const signupRepeatPassword = page.locator('#signupRepeatPassword')
    await signupRepeatPassword.fill('8Aatest')
    const registerBtn = page.locator('.modal-footer > .btn')
    await registerBtn.click({force: true})
    
    const invalidPasswordMessage = page.locator('.invalid-feedback > p')
    await expect(invalidPasswordMessage).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter'); 
    await expect(invalidPasswordMessage).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    })

test('should show "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter" when the password field contains 16 characters', async ({page}) => {
    
        
    const signupRepeatPassword = page.locator('#signupRepeatPassword')
    await signupRepeatPassword.fill('8Aatest8Aatest78')
    const registerBtn = page.locator('.modal-footer > .btn')
    await registerBtn.click({force: true})
        
    const invalidPasswordMessage = page.locator('.invalid-feedback > p')
    await expect(invalidPasswordMessage).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter'); 
    await expect(invalidPasswordMessage).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    })

test('should show "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter" when the password field does not contain 1 capital letter', async ({page}) => {
  
            
    const signupRepeatPassword = page.locator('#signupRepeatPassword')
    await signupRepeatPassword.fill('8aatest8aatest7')
    const registerBtn = page.locator('.modal-footer > .btn')
    await registerBtn.click({force: true})
            
    const invalidPasswordMessage = page.locator('.invalid-feedback > p')
    await expect(invalidPasswordMessage).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter'); 
    await expect(invalidPasswordMessage).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    })
            
test('should show "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter" when the password field does not contain 1 small letter', async ({page}) => {
    
                
    const signupRepeatPassword = page.locator('#signupRepeatPassword')
    await signupRepeatPassword.fill('8AATEST8AATEST7')
    const registerBtn = page.locator('.modal-footer > .btn')
    await registerBtn.click({force: true})
                
    const invalidPasswordMessage = page.locator('.invalid-feedback > p')
    await expect(invalidPasswordMessage).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter'); 
    await expect(invalidPasswordMessage).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    })

test('should show "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter" when the password field does not contain 1 interger', async ({page}) => {
    
                    
    const signupRepeatPassword = page.locator('#signupRepeatPassword')
    await signupRepeatPassword.fill('8AATEST8AATEST7')
    const registerBtn = page.locator('.modal-footer > .btn')
    await registerBtn.click({force: true})
                    
    const invalidPasswordMessage = page.locator('.invalid-feedback > p')
    await expect(invalidPasswordMessage).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter'); 
    await expect(invalidPasswordMessage).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    })

})
