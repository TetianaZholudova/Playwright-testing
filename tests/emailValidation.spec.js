import { test, expect } from '@playwright/test';


test.describe('Email validation', () => {
test.beforeEach(async ({page}) => {
    await page.goto('/'); 

    const signUpBtn = page.locator('.hero-descriptor_btn')
    await signUpBtn.click(); 
})

test('should show "Email required" when the email field is empty', async ({page}) => {
    

    const signupEmail = page.locator('#signupEmail')
    await signupEmail.focus()
    await signupEmail.blur()
    
    const invalideEmailMessage = page.locator('.invalid-feedback > p')
    await expect(invalideEmailMessage).toHaveText('Email required'); 
    await expect(invalideEmailMessage).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    })

test('should show "Email is incorrect" when the username contains wrong data', async ({page}) => {
    
    
    const signupEmail = page.locator('#signupEmail')
    await signupEmail.fill('tanya.gmail.com')
    const registerBtn = page.locator('.modal-footer > .btn')
    await registerBtn.click({force: true})
  
    
    const invalideEmailMessage = page.locator('.invalid-feedback > p')
    await expect(invalideEmailMessage).toHaveText('Email is incorrect'); 
    await expect(invalideEmailMessage).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    })


})
