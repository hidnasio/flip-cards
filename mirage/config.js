export default function() {
  this.namespace = 'api';

  this.get('/cards', (schema, request) => {
    let cards = schema.cards.all();

    cards.models = cards.models.slice(0, request.queryParams.limit);

    return cards;
  });
}
