import { ClientFunction, Selector } from 'testcafe';

const currentLocation = ClientFunction(() => document.location.href);

fixture `Beers page`
  .page `https://reactive-ratebeer.herokuapp.com/beers`;

test('typing into search box filters beers', async testCafe => {
  await testCafe
    .typeText('input[type="text"]', '1234567-8');
});