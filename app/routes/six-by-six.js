import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let models = this.store.query('card', { limit: 36 });
    return Ember.ArrayProxy.create({
      content: models,
      objectAtContent: function(idx) {
        let model = this.get('content').objectAt(idx);

        return Ember.ObjectProxy.create({
          content: model,
          isFlipped: false
        });
      }
    });
  }
});
