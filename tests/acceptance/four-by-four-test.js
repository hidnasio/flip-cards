import { test } from 'qunit';
import moduleForAcceptance from 'flip-cards-telling-stories-example/tests/helpers/module-for-acceptance';
import page from 'flip-cards-telling-stories-example/tests/pages/four-by-four';
const { RSVP } = Ember;

moduleForAcceptance('Acceptance | four by four test');

function delay(milliseconds) {
  return new RSVP.Promise(function(resolve) {
    window.setTimeout(function() {
      resolve();
    }, milliseconds);
  });
};

test('visiting /four-by-four', function(assert) {
  page.visit();

  andThen(function() {
    assert.equal(page.cards().count, 16);
  });
});

test('click on card', function(assert) {
  page.visit()
  page.cards(1).click();
  page.cards(2).click();
  page.cards(3).click();
  page.cards(4).click();
  page.cards(5).click();
  page.cards(6).click();
  page.cards(7).click();
  page.cards(8).click();
  page.cards(9).click();
  page.cards(10).click();
  return stop();
});
