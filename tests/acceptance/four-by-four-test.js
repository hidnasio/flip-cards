import { test } from 'qunit';
import moduleForAcceptance from 'flip-cards/tests/helpers/module-for-acceptance';
import page from 'flip-cards/tests/pages/four-by-four';

moduleForAcceptance('Acceptance | four by four test');

function tryCard(page) {
  return wait().then(function(){
    if(page.unselectedCards().count <= 0) {
      return;
    }

    let card = Math.floor((Math.random() * page.unselectedCards().count));
    page.unselectedCards(card).click();

    return tryCard(page);
  });
}

test('Play with birds', function(assert) {
  server.createList('card', 8, { type: 'bird', numberOfImages: 18 });
  page.visit();
  tryCard(page);
  assert.ok(true);
});

test('Play with dogs', function(assert) {
  server.createList('card', 18, { type: 'dog', numberOfImages: 18 });
  visit('/six-by-six');
  tryCard(page);
  assert.ok(true);
});

test('Play with Tomster', function(assert) {
  server.createList('card', 32, { type: 'tomster', numberOfImages: 18 });
  visit('/eight-by-eight');
  tryCard(page);
  assert.ok(true);
});
