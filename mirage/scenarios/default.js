export default function(server) {
  server.createList('card', 18, { type: 'bird', numberOfImages: 18 });
  server.createList('card', 32, { type: 'dog', numberOfImages: 32 });
  server.createList('card', 43, { type: 'tomster', numberOfImages: 43 });
}
