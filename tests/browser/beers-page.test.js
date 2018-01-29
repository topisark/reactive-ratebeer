import { Selector } from 'testcafe';

fixture `Beers page`
  .page `https://reactive-ratebeer.herokuapp.com/`;

test('typing into search box filters beers', async testCafe => {
  await testCafe.click(Selector('span').withText('BEERS'));

  const beers = Selector('.beers-content').child();
  const initialBeersCount = await beers.count;
  await testCafe.typeText('input[type="text"]', 'foobar-barfoo');

  const currentBeersCount = await beers.count;
  await testCafe.expect(initialBeersCount).gt(currentBeersCount);
});