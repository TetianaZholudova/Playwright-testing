import { test, expect } from '@playwright/test';


test.describe('Login validation', () => {
test('verify if user is able to login successfully', async ({page}) => {
    await page.goto('/'); 

    const signInButton = page.locator('.header_right > .btn')
    await signInButton.click(); 

    const signinEmail = page.locator('#signinEmail')
    await signinEmail.fill('aqa-xajaveppeicu-7909@yopmail.com')

    const signinPassword = page.locator('#signinPassword')
    await signinPassword.fill('fghRTY789AA')
    
    const logInButton = page.locator('.modal-footer > .btn-primary')
    await logInButton.click() 


})


})