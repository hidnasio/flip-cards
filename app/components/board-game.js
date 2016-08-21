import Ember from 'ember';

export default Ember.Component.extend({
  previous: null,
  sizeClass: Ember.computed('size', function(){
    return `s${this.get('size')}`;
  }),
  actions: {
    flip(card) {

      let previous = this.get('previous');

      // current card already flipped -> do nothing
      if(card.get('isFlipped')) {
        return false;
      }

      // previous card null -> flip current card
      if(previous === null) {
        Ember.set(card, 'isFlipped', true);
        this.set('previous', card);
        return false;
      }

      // previous card and current card different -> flip previous and show current
      if(previous.get('value') !== card.get('value')) {
        this.set('previous', null);
        Ember.set(card, 'isFlipped', true);

        setTimeout(function() {
          Ember.set(card, 'isFlipped', false);
          Ember.set(previous, 'isFlipped', false);
        }, 800);
        return false;
      }

      // previous card and current card equals -> flip current
      if(previous.get('value') === card.get('value')) {
        Ember.set(card, 'isFlipped', true);
        this.set('previous', null);
        return false;
      }
    }
  }
});