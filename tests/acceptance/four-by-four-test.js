import { test } from 'qunit';
import moduleForAcceptance from 'flip-cards/tests/helpers/module-for-acceptance';
import page from 'flip-cards/tests/pages/four-by-four';

moduleForAcceptance('Acceptance | four by four test');

test('visiting /four-by-four', function(assert) {
  page.visit();

  andThen(function() {
    assert.equal(page.cards().count, 16);
  });
});

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

test('click on card', function(assert) {
  server.createList('card', 16);
  page.visit();
  tryCard(page);
  assert.ok(true);
});
