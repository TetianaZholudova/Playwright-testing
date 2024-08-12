import { test, expect } from '@playwright/test';


test.describe('FirstName validation', () => {
test.beforeEach(async ({page}) => {
    await page.goto('/'); 

    const signUpBtn = page.locator('.hero-descriptor_btn')
    await signUpBtn.click(); 
})

test('should show "Name required" when the username field is empty', async ({page}) => {
    await page.goto('/'); 

    const signUpBtn = page.locator('.hero-descriptor_btn')
    await signUpBtn.click(); 

    const signupName = page.locator('#signupName')
    await signupName.focus()
    await signupName.blur()
    
    const invalideFirstNameMessage = page.locator('.invalid-feedback > p')
    await expect(invalideFirstNameMessage).toHaveText('Name required'); 
    await expect(invalideFirstNameMessage).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    })

test('should show "Name has to be from 2 to 20 characters long" when the username contains 1 letter', async ({page}) => {
    
    
    const signupName = page.locator('#signupName')
    await signupName.fill('T')
    const registerBtn = page.locator('.modal-footer > .btn')
    await registerBtn.click({force: true})
    
    const invalidFirstNameMessage = page.locator('.invalid-feedback > p')
    await expect(invalidFirstNameMessage).toHaveText('Name has to be from 2 to 20 characters long'); 
    await expect(invalidFirstNameMessage).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    })

test('should show "Name has to be from 2 to 20 characters long" when the username contains 21 letters', async ({page}) => {
    
        
    const signupName = page.locator('#signupName')
    await signupName.fill('TetianaOleksandraCleo')
    const registerBtn = page.locator('.modal-footer > .btn')
    await registerBtn.click({force: true})
        
    const invalidFirstNameMessage = page.locator('.invalid-feedback > p')
    await expect(invalidFirstNameMessage).toHaveText('Name has to be from 2 to 20 characters long'); 
    await expect(invalidFirstNameMessage).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    })

test('should show "Name is invalid" when the username contains special characters', async ({page}) => {
   
            
    const signupName = page.locator('#signupName')
    await signupName.fill('Tetiana^&*&')
    const registerBtn = page.locator('.modal-footer > .btn')
    await registerBtn.click({force: true})
            
    const invalidFirstNameMessage = page.locator('.invalid-feedback > p')
    await expect(invalidFirstNameMessage).toHaveText('Name is invalid'); 
    await expect(invalidFirstNameMessage).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    })

test('should show "Name is invalid" when the username contains digits', async ({page}) => {
   
                
    const signupName = page.locator('#signupName')
    await signupName.fill('Tetiana123')
    const registerBtn = page.locator('.modal-footer > .btn')
    await registerBtn.click({force: true})
                
    const invalidFirstNameMessage = page.locator('.invalid-feedback > p')
    await expect(invalidFirstNameMessage).toHaveText('Name is invalid'); 
    await expect(invalidFirstNameMessage).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    })
})
