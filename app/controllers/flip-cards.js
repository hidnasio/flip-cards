import Ember from 'ember';

export default Ember.Controller.extend({
  previous: null,
  actions: {
    flip(card) {
      let previous = this.get('previous');

      // current card already flipped -> do nothing
      if(card.isFlipped) {
        return false;
      }

      // previous card null -> flip current card
      if(previous === null) {
        Ember.set(card, 'isFlipped', true);
        this.set('previous', card);
        return false;
      }

      // previous card and current card different -> flip previous and show current
      if(previous.value !== card.value) {
        this.set('previous', null);
        Ember.set(card, 'isFlipped', true);

        setTimeout(function() {
          Ember.set(card, 'isFlipped', false);
          Ember.set(previous, 'isFlipped', false);
        }, 800);
        return false;
      }

      // previous card and current card equals -> flip current
      if(previous.value === card.value) {
        Ember.set(card, 'isFlipped', true);
        this.set('previous', null);
        return false;
      }
    }
  }
});
