import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  front() {
    return '';
  },

  back() {
    return `${this.type}${this.index}.png`;
  },

  value() {
    return `${this.type}${this.index}`;
  },

  type: 'bird',

  index(i) {
    return (i % this.numberOfImages) + 1;
  },

  numberOfImages: 1
});
