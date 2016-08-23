export default function() {
  this.passthrough('/telling-stories/acceptance.json');

  this.namespace = '/api';

  this.get('cards', (schema, request) => {

    let type = 'bird';

    if(request.queryParams.type)
      type = request.queryParams.type;

    let cards = schema.cards.where({ type: type });

    shuffle(cards.models);

    cards.models = cards.models.slice(0, request.queryParams.limit);

    return cards;
  });
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}
