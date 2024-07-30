import { Selector } from 'testcafe';

fixture `Login Test`
    .page `https://10.134.119.112/login`; // your page URL

test('User can login with valid credentials', async t => {
    await t
        .typeText('#username', 'admin') // provided username
        .typeText('#password', 'admin') // provided password
        .click('#login-button')
        .expect(Selector('#login-form').exists).notOk() // assumes the form disappears on successful login
        .expect(Selector('#welcome-message').innerText).eql('Welcome, admin!'); // replace with expected welcome message
});
