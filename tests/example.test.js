import { Selector } from 'testcafe';

fixture `My First Test`
    .page `https://google.com`;

test('Check page title', async t => {
    const title = await t.eval(() => document.title);
    await t.expect(title).eql('Example Domain');
});
