import { test, expect } from '@playwright/test';


test.describe('Password validation', () => {
test.beforeEach(async ({page}) => {
    await page.goto('/')
    const signUpBtn = page.locator('.hero-descriptor_btn')
    await signUpBtn.click()
})

test('should show "Password required" when the password field is empty', async ({page}) => {
    

    const signupPassword = page.locator('#signupPassword')
    await signupPassword.focus()
    await signupPassword.blur()
    
    const invalidPasswordMessage = page.locator('.invalid-feedback > p')
    await expect(invalidPasswordMessage).toHaveText('Password required'); 
    await expect(invalidPasswordMessage).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    })

test('should show "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter" when the password field contains 7 characters', async ({page}) => {
    
    
    const signupPassword = page.locator('#signupPassword')
    await signupPassword.fill('8Aatest')
    await signupPassword.blur()
    
    const invalidPasswordMessage = page.locator('.invalid-feedback > p')
    await expect(invalidPasswordMessage).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter'); 
    await expect(invalidPasswordMessage).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    })

test('should show "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter" when the password field contains 16 characters', async ({page}) => {
    
        
    const signupPassword = page.locator('#signupPassword')
    await signupPassword.fill('8Aatest8Aatest78')
    const registerBtn = page.locator('.modal-footer > .btn')
    await registerBtn.click({force: true})
        
    const invalidPasswordMessage = page.locator('.invalid-feedback > p')
    await expect(invalidPasswordMessage).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter'); 
    await expect(invalidPasswordMessage).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    })

test('should show "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter" when the password field does not contain 1 capital letter', async ({page}) => {
    
            
    const signupPassword = page.locator('#signupPassword')
    await signupPassword.fill('8aatest8aatest7')
    const registerBtn = page.locator('.modal-footer > .btn')
    await registerBtn.click({force: true})
            
    const invalidPasswordMessage = page.locator('.invalid-feedback > p')
    await expect(invalidPasswordMessage).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter'); 
    await expect(invalidPasswordMessage).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    })
            
test('should show "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter" when the password field does not contain 1 small letter', async ({page}) => {
    
                
    const signupPassword = page.locator('#signupPassword')
    await signupPassword.fill('8AATEST8AATEST7')
    const registerBtn = page.locator('.modal-footer > .btn')
    await registerBtn.click({force: true})
                
    const invalidPasswordMessage = page.locator('.invalid-feedback > p')
    await expect(invalidPasswordMessage).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter'); 
    await expect(invalidPasswordMessage).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    })

test('should show "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter" when the password field does not contain 1 interger', async ({page}) => {
    
                    
    const signupPassword = page.locator('#signupPassword')
    await signupPassword.fill('8AATEST8AATEST7')
    const registerBtn = page.locator('.modal-footer > .btn')
    await registerBtn.click({force: true})
                    
    const invalidPasswordMessage = page.locator('.invalid-feedback > p')
    await expect(invalidPasswordMessage).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter'); 
    await expect(invalidPasswordMessage).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    })

})
