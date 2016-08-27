import Ember from 'ember';
import CreateCards from '../mixins/create-cards';

export default Ember.Route.extend(CreateCards, {
  model() {
    let models = this.store.query('card', { limit: 32, type: 'tomster' });

    return this.createCards(models);
  }
});
