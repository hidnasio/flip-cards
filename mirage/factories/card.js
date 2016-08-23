import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  front() {
    return '';
  },

  back(i) {
    return `${this.type}${this.index}.png`;
  },

  value(i) {
    return `${this.type}${this.index}`;
  },

  type: 'bird',

  index(i) {
    return (i % this.numberOfImages) + 1;
  },

  numberOfImages: 1
});
