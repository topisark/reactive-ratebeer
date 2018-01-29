import { ClientFunction, Selector } from 'testcafe';

const currentLocation = ClientFunction(() => document.location.href);

fixture `Navigation`
  .page `https://reactive-ratebeer.herokuapp.com/`;

test('clicking navigation button changes url', async testCafe => {
  const navText = 'beers';
  const navButton = Selector('span').withText(navText.toUpperCase());
  await testCafe
    .click(navButton)
    .expect(currentLocation()).contains(`/${navText}`);
});