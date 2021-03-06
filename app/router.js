import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.mount('telling-stories-dashboard', { path: '/stories' });
  this.route('four-by-four');
  this.route('six-by-six');
  this.route('eight-by-eight');
});

export default Router;
