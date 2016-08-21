import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  actions: {
    flipped() {
      this.sendAction('flipped', this.get('card'));
    }
  }
});
