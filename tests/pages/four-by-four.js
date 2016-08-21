import {
  create,
  visitable,
  attribute,
  collection,
  clickable
} from 'ember-cli-page-object';

export default create({
  visit: visitable('/four-by-four'),
  cards: collection({
    itemScope: '.card',
    item: {
      image: attribute('src', 'img')
    }
  })
});
