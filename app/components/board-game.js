import Ember from 'ember';

export default Ember.Component.extend({
  previous: null,
  sizeClass: Ember.computed('size', function(){
    return `s${this.get('size')}`;
  }),
  canIPlay: true,
  actions: {
    flip(card) {

      // TODO: get rid of the setTimeout
      if(!this.get('canIPlay')) {
        return false;
      }

      let previous = this.get('previous');

      // current card already flipped -> do nothing
      if(card.get('isFlipped')) {
        Ember.set(card, 'animation', 'show');
        return false;
      }

      // previous card null -> flip current card
      if(previous === null) {
        Ember.set(card, 'isFlipped', true);
        Ember.set(card, 'animation', 'show');
        this.set('previous', card);
        return false;
      }

      // previous card and current card different -> flip previous and show current
      if(previous.get('value') !== card.get('value')) {
        this.set('previous', null);
        Ember.set(previous, 'isFlipped', false);
        Ember.set(card, 'animation', 'show');
        this.set('canIPlay', false);
        let component = this;

        setTimeout(function() {
          Ember.run(function(){
            Ember.set(card, 'animation', 'hide');
            Ember.set(previous, 'animation', 'hide');
            component.set('canIPlay', true);
          });
        }, 800);
        return false;
      }

      // previous card and current card equals -> flip current
      if(previous.get('value') === card.get('value')) {
        Ember.set(card, 'isFlipped', true);
        Ember.set(card, 'animation', 'show');
        this.set('previous', null);
        return false;
      }
    }
  }
});
