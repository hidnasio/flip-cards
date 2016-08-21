import {
  create,
  visitable,
  attribute,
  collection
} from 'ember-cli-page-object';

export default create({
  visit: visitable('/four-by-four'),
  unselectedCards: collection({
    itemScope: '.card:not(.flipped)',
    item: {
      image: attribute('src', 'img')
    }
  }),
  cards: collection({
    itemScope: '.card',
    item: {
      image: attribute('src', 'img')
    }
  })
});
