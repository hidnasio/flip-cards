import Ember from 'ember';

export default Ember.Mixin.create({
  createCards(models) {
    return Ember.RSVP.resolve(models).then(function(models){
      let proxyModels = [];
      models.forEach(function(model){
        let extraFields = { content: model, isFlipped: false, animation: '' };
        proxyModels.push(Ember.ObjectProxy.create(extraFields));
        proxyModels.push(Ember.ObjectProxy.create(extraFields));
      });
      return proxyModels;
    });
  }
});
