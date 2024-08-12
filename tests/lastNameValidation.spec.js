import { test, expect } from '@playwright/test';


test.describe('LastName validation', () => {
test.beforeEach(async ({page}) => {
    await page.goto('/'); 

    const signUpBtn = page.locator('.hero-descriptor_btn')
    await signUpBtn.click(); 
})

test('should show "Last name required" when the lastname field is empty', async ({page}) => {
    

    const signupLastName = page.locator('#signupLastName')
    await signupLastName.focus()
    await signupLastName.blur()
    
    const invalidLastNameMessage = page.locator('.invalid-feedback > p')
    await expect(invalidLastNameMessage).toHaveText('Last name required'); 
    await expect(invalidLastNameMessage).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    })

test('should show "Last name has to be from 2 to 20 characters long" when the last name contains 1 letter', async ({page}) => {
    
    
    const signupLastName = page.locator('#signupLastName')
    await signupLastName.fill('Z')
    const registerBtn = page.locator('.modal-footer > .btn')
    await registerBtn.click({force: true})
    
    const invalidLastNameMessage = page.locator('.invalid-feedback > p')
    await expect(invalidLastNameMessage).toHaveText('Last name has to be from 2 to 20 characters long'); 
    await expect(invalidLastNameMessage).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    })

test('should show "Last name has to be from 2 to 20 characters long" when the last name contains 21 letters', async ({page}) => {
   
        
    const signupLastName = page.locator('#signupLastName')
    await signupLastName.fill('ZholudovaZholudovaZholudovaZholudova')
    const registerBtn = page.locator('.modal-footer > .btn')
    await registerBtn.click({force: true})
        
    const invalidLastNameMessage = page.locator('.invalid-feedback > p')
    await expect(invalidLastNameMessage).toHaveText('Last name has to be from 2 to 20 characters long'); 
    await expect(invalidLastNameMessage).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    })

test('should show "Last name is invalid" when the last name contains special characters', async ({page}) => {
     
            
    const signupLastName = page.locator('#signupLastName')
    await signupLastName.fill('Zhol^&*')
    const registerBtn = page.locator('.modal-footer > .btn')
    await registerBtn.click({force: true})
            
    const invalidLastNameMessage = page.locator('.invalid-feedback > p')
    await expect(invalidLastNameMessage).toHaveText('Last name is invalid'); 
    await expect(invalidLastNameMessage).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    })

test('should show "Name is invalid" when the username contains digits', async ({page}) => {
    
                
    const signupLastName = page.locator('#signupLastName')
    await signupLastName.fill('Zholudova123')
    const registerBtn = page.locator('.modal-footer > .btn')
    await registerBtn.click({force: true})
                
    const invalidLastNameMessage = page.locator('.invalid-feedback > p')
    await expect(invalidLastNameMessage).toHaveText('Last name is invalid'); 
    await expect(invalidLastNameMessage).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    })
})
