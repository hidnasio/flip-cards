import DS from 'ember-data';

export default DS.Model.extend({
  front: DS.attr('string'),
  back: DS.attr('string'),
  value: DS.attr('string')
});
