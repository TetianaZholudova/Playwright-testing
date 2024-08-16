import { test, expect } from '@playwright/test';


test.describe('Registration', () => {
test('verify if user is able to register in system', async ({page}) => {
    await page.goto('/'); 
    const signUpBtn = page.locator('.hero-descriptor_btn')
    await signUpBtn.click(); 
    
    const signupName = page.locator('#signupName')
    await signupName.fill('Juliette')

    const signupLastName = page.locator('#signupLastName')
    await signupLastName.fill('Wade')

    const signupEmail = page.locator('#signupEmail')
    await signupEmail.fill('aqa-xajaveppeicu-7911@yopmail.com')

    const signupPassword = page.locator('#signupPassword')
    await signupPassword.fill('fghRTY789AA')
    
    const signupRepeatPassword = page.locator('#signupRepeatPassword')
    await signupRepeatPassword.fill('fghRTY789AA')
    
    const registerButton = page.locator('.modal-footer > .btn')
    await expect(registerButton).toBeEnabled()
    await registerButton.click()


})


})

