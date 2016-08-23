import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.resolve(this.store.query('card', { limit: 32, type: 'tomster' })).then(function(models){
      let proxyModels = [];
      models.forEach(function(model){
        proxyModels.push(Ember.ObjectProxy.create({ content: model, isFlipped: false, animation: '' }));
        proxyModels.push(Ember.ObjectProxy.create({ content: model, isFlipped: false, animation: '' }));
      });
      return proxyModels;
    });
  }
});
